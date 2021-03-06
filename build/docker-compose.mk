## makefile for docker-compose

include share.mk

# === variables ===
# 发布镜像时使用的前缀（用于表示用户名）
RepoName = liu233w/
# 使用 git commit hash 来表示镜像的tag
CommitHash := $(shell git log -1 --pretty=%H)
# 要发布的镜像变量名
Images = FrontendTag CrawlerApiBackendTag BackendTag CaptchaServiceTag

# === inner ===
# 内部使用的变量
ImageToTag := $(foreach n,$(Images),$(n)-tag)
ImageToPush := $(foreach n,$(Images),$(n)-push)
# 单独的 target 的内部变量
$(ImageToTag): Image = $($(subst -tag,,$@))
$(ImageToPush): Image = $($(subst -push,,$@))
$(ImageToTag) $(ImageToPush): ImageNameWithHash = $(RepoName)$(Image):$(CommitHash)
$(ImageToTag) $(ImageToPush): ImageNameWithLatest = $(RepoName)$(Image):latest

# === targets ===

.PHONY: .build tag push up dev-frontend .build-dev e2e-up

.build:
	$(MAKE) -C ../crawler-api-backend build
	$(MAKE) -C ../frontend build
	$(MAKE) -C ../backend build
	$(MAKE) -C ../captcha-service build

tag: .build $(ImageToTag)

push: tag $(ImageToPush)

$(ImageToTag):
	@echo try to tag $(ImageNameWithHash) and $(ImageNameWithLatest)
	docker tag $(Image) $(ImageNameWithHash)
	docker tag $(Image) $(ImageNameWithLatest)

$(ImageToPush):
	@echo try to push $(ImageNameWithHash) and $(ImageNameWithLatest)
	docker push $(ImageNameWithHash)
	docker push $(ImageNameWithLatest)

up: .build .env
	$(RMR) backend-db || echo remove failed
	$(MKDIR) backend-db
	docker-compose up $(compose-args)

# 为了进行e2e测试而启动的服务器，除了正常的代码外，还会启动 mock-server
# 移除原先的数据库
e2e-up: .build .env
	$(MAKE) -C ../e2e build-http-mocks
	$(RMR) backend-db || echo remove failed
	$(MKDIR) backend-db
	docker-compose -f docker-compose.yml -f docker-compose.e2e.yml up $(compose-args)

.env:
	$(CP) template.env .env

dev-frontend: .build
	docker-compose -f docker-compose.yml -f docker-compose.dev-frontend.yml up $(compose-args)

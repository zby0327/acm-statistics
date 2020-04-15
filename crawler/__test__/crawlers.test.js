const _ = require('lodash')

const poj = require('../crawlers/poj')
const hdu = require('../crawlers/hdu')
const zoj = require('../crawlers/zoj')
const dashiye = require('../crawlers/dashiye')
const codeforces = require('../crawlers/codeforces')
const uva = require('../crawlers/uva')
const fzu = require('../crawlers/fzu')
const spoj = require('../crawlers/spoj')
const timus = require('../crawlers/timus')
const leetcode_cn = require('../crawlers/leetcode_cn')
const vjudge = require('../crawlers/vjudge')
const csu = require('../crawlers/csu')
const loj = require('../crawlers/loj')
const luogu = require('../crawlers/luogu')
const nowcoder = require('../crawlers/nowcoder')
const uestc = require('../crawlers/uestc')
const atcoder = require('../crawlers/atcoder')

const { readConfigs } = require('../lib/configReader')

jest.setTimeout(10000) // 最多10秒

const notExistUsername = 'fmv84zcq3hwu'
const username = 'vjudge5'

// 另外，感谢 @leoloveacm, @2013300262 同学提供测试帐号

describe('poj', () => {

  test('test poj - 用户不存在时抛出异常', async () => {
    await expect(poj(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test poj - 能够正确识别带有空格的用户名', async () => {
    await expect(poj(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test poj', async () => {
    const res = await poj(null, username)
    checkRes(res)
    expect(res.solvedList).toContain('1001')
  })

})

describe('hdu', () => {

  const config = {
    env: 'server',
  }

  test('test hdu - 用户不存在时抛出异常', async () => {
    await expect(hdu(config, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test hdu - 能够正确识别带有空格的用户名', async () => {
    await expect(hdu(config, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test hdu', async () => {
    const res = await hdu(config, 'vjudge4')
    checkRes(res)
    expect(res.solvedList).toContain('1001')
  })

})

describe('zoj', () => {

  test('test zoj - 用户不存在时抛出异常', async () => {
    await expect(zoj(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test zoj - 能够正确识别带有空格的用户名', async () => {
    await expect(zoj(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test zoj', async () => {
    const res = await zoj(null, username)
    checkRes(res)
    expect(res.solvedList).toContain('1001')
  })

})

describe('dashiye', () => {

  test('test dashiye - 用户不存在时抛出异常', async () => {
    await expect(dashiye(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test dashiye - 能够正确识别带有空格的用户名', async () => {
    await expect(dashiye(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test dashiye', async () => {
    const res = await dashiye(null, username)
    checkRes(res)
    expect(res.solvedList).toContain('1001')
  })

})

describe('codeforces', () => {

  test('test codeforces - 用户不存在时抛出异常', async () => {
    await expect(codeforces(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test codeforces - 能够正确识别带有空格的用户名', async () => {
    await expect(codeforces(null, ' ' + notExistUsername)).rejects.toThrow('handle: Field should contain only Latin letters, digits, underscore or dash characters')
  })

  test('test codeforces', async () => {
    const res = await codeforces(null, 'leoloveacm') // 没有找到好的测试多页返回的帐号，还是用这个测试单页吧
    checkRes(res)

    expect(new Set(res.solvedList)).toMatchObject(new Set([
      '754-B', '165-E', '492-E', '338-D', '333-A', '703-A', '540-C', '680-B', '680-A', '676-A', '450-B', '667-A', '667-C',
    ]))
  })

})

describe('uva', () => {

  test('test uva - 用户不存在时抛出异常', async () => {
    await expect(uva(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test uva', async () => {
    const res = await uva(null, 'leoloveacm')
    checkRes(res)
    expect(res.solvedList).toContain('4141')
  })

})

describe('fzu', () => {

  test('test fzu - 用户不存在时抛出异常', async () => {
    await expect(fzu(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test fzu', async () => {
    const res = await fzu(null, username)
    checkRes(res)
    expect(res.solvedList).toContain('1001')
  })

})

describe('spoj', () => {

  test('test spoj - 用户不存在时抛出异常', async () => {
    await expect(spoj(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test spoj - 能够正确识别带有空格的用户名', async () => {
    await expect(spoj(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test spoj', async () => {
    const res = await spoj(null, username)
    checkRes(res)
    expect(res.solvedList).toContain('ABA12D')
  })

})

describe('timus', () => {

  test('test timus - 用户不存在时抛出异常', async () => {
    await expect(timus(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test timus - 能够正确识别带有空格的用户名', async () => {
    await expect(timus(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test timus', async () => {
    const res = await timus(null, 'vjudge11')
    checkRes(res)
    expect(res.submissions).toBeGreaterThan(10)
    expect(res.solvedList).toContain('1387')
  })

})

describe('leetcode_cn', () => {

  test('test leetcode_cn - 用户不存在时抛出异常', async () => {
    await expect(leetcode_cn(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test leetcode_cn - 能够正确识别带有空格的用户名', async () => {
    await expect(leetcode_cn(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test leetcode_cn', async () => {
    const res = await leetcode_cn(null, 'wwwlsmcom')
    checkRes(res)
  })

})

describe('csu', () => {

  test('test csu - 用户不存在时抛出异常', async () => {
    await expect(csu(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test csu - 能够正确识别带有空格的用户名', async () => {
    await expect(csu(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test csu', async () => {
    const res = await csu(null, username)
    checkRes(res)
    expect(res.solvedList).toContain('1001')
  })

})

describe('vjudge', () => {

  let vjConfig

  beforeAll(async () => {
    const config = await readConfigs()
    // 需要读取设置，因此没法在 ci 里面测试
    // 在进行测试之前首先要根据 README.md 里的说明来设置环境变量
    vjConfig = config.crawlers.vjudge
  })

  test('首先保证配置文件正确并且拥有正确的环境变量', () => {
    // 必须要保证配置文件正确才能进行此项测试
    expect(vjConfig).toBeTruthy()
    expect(vjConfig.crawler_login_user).toBeTruthy()
    expect(vjConfig.crawler_login_user).not.toBe('用户名')
    expect(vjConfig.crawler_login_password).toBeTruthy()
    expect(vjConfig.crawler_login_password).not.toBe('密码')

    // console.log(vjConfig)
  })

  test('test vjudge - 用户不存在时抛出异常', async () => {
    await expect(vjudge(vjConfig, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test vjudge - 能够正确识别带有空格的用户名', async () => {
    await expect(vjudge(vjConfig, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test vjudge', async () => {
    const res = await vjudge(vjConfig, 'leoloveacm')
    checkRes(res)
    expect(res.solvedList).toContain('codeforces-436B')
  }, 50000)
})

describe('loj', () => {

  test('test loj - 用户不存在时抛出异常', async () => {
    await expect(loj(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test loj - 能够正确识别带有空格的用户名', async () => {
    await expect(loj(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test loj', async () => {
    const res = await loj(null, 'cz_xuyixuan') // 自定义存在的用户名
    checkRes(res)
    expect(res.solvedList).toContain('103')
  })

})

describe('luogu', () => {

  test('test luogu - 用户不存在时抛出异常', async () => {
    await expect(luogu(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test luogu - 能够正确识别带有空格的用户名', async () => {
    await expect(luogu(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test luogu', async () => {
    const res = await luogu(null, 'CancerGary') // 自定义存在的用户名
    checkRes(res)
    expect(res.solvedList).toContain('P1001')
    expect(res.solvedList.length).toBeGreaterThan(100)
  })

  test('test luogu - 能够正确处理提交数大于 1000 的用户', async () => {
    const res = await luogu(null, 'NaCly_Fish')
    checkRes(res)
    expect(res.submissions).toBeGreaterThan(1000)
  })
})

describe('nowcoder', () => {

  test('test nowcoder - 用户不存在时抛出异常', async () => {
    await expect(nowcoder(null, '11')).rejects.toThrow('用户不存在')
  })

  test('test nowcoder - 识别不是ID的用户名', async () => {
    await expect(nowcoder(null, 'wwwlsmcom')).rejects.toThrow('牛客网的输入必须是用户ID（数字格式）')
    await expect(nowcoder(null, '123wwwlsmcom')).rejects.toThrow('牛客网的输入必须是用户ID（数字格式）')
    await expect(nowcoder(null, '123 wwwlsmcom')).rejects.toThrow('牛客网的输入必须是用户ID（数字格式）')
    await expect(nowcoder(null, ' wwwlsmcom')).rejects.toThrow('牛客网的输入必须是用户ID（数字格式）')
  })

  test('test nowcoder', async () => {
    const res = await nowcoder(null, '112946')
    checkRes(res)
    expect(res.solvedList).toContain('16632')
  })

})

describe('uestc', () => {

  test('test uestc - 用户不存在时抛出异常', async () => {
    await expect(uestc(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test uestc - 能够正确识别带有空格的用户名', async () => {
    await expect(uestc(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test uestc', async () => {
    const res = await uestc(null, 'HeRaNO')
    checkRes(res)
    expect(res.solvedList).toContain('1490')

    const newRes = await uestc(null, 'acm-statistics-test')
    expect(newRes).toMatchObject({
      submissions: 3,
      solved: 1,
      solvedList: ['1'],
    })
  })

})

describe('atcoder', () => {

  test('test atcoder - 用户不存在时抛出异常', async () => {
    await expect(atcoder(null, notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test atcoder - 能够正确识别带有空格的用户名', async () => {
    await expect(atcoder(null, ' ' + notExistUsername)).rejects.toThrow('用户不存在')
  })

  test('test atcoder', async () => {
    const res = await atcoder(null, 'wata')
    checkRes(res)
    expect(res.solvedList).toContain('judge_update_202004_b')
  })

})

function checkRes(res) {
  expect(typeof res.solved).toBe('number')
  expect(typeof res.submissions).toBe('number')

  expect(res.solved).toBeGreaterThan(0)
  expect(res.submissions).toBeGreaterThan(0)

  expect(res.submissions).toBeGreaterThan(res.solved)

  if (!_.isNil(res.solvedList)) {
    expect(res.solvedList.length).toBe(res.solved)
  }
}
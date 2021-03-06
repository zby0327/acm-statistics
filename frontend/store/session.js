import Cookies from 'js-cookie'

export const state = () => ({
  login: false,
  username: '',
})

export const mutations = {
  setUser(state, { username }) {
    state.login = true
    state.username = username
  },
  removeUser(state) {
    state.login = false
    state.username = ''
  },
}

export const actions = {
  async refreshUser({ commit }) {
    try {
      const res = await this.$axios.$get('/api/services/app/Session/GetCurrentLoginInformations')

      if (res.result.user) {
        commit('setUser', { username: res.result.user.userName })
      } else {
        commit('removeUser')
      }
    } catch (err) {
      Cookies.remove('OAuthToken')
    }
  },
  async login({ dispatch }, { username, password, remember }) {
    const res = await this.$axios.$post('/api/TokenAuth/Authenticate', {
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: remember,
    })

    const config = {}
    if (remember) {
      config.expires = 30
    }
    Cookies.set('OAuthToken', res.result.accessToken, config)

    await dispatch('refreshUser')
  },
  async logout({ commit }) {
    Cookies.remove('OAuthToken')
    commit('removeUser')
  },
}

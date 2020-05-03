import api from '@/utils/api'

export default {
  async SEARCH_USERS({ commit }, username) {
    let data = []
    if (username) {
      data = await api.searchUsers(username)
    }
    commit('SET_USERS', data)
    return data
  },
  async GET_USER_ID({ commit }, userId) {
    let data = []
    if (userId) {
      data = await api.getUser(userId)
    }
    commit('SET_USER_ID', data)
    return data
  },
}

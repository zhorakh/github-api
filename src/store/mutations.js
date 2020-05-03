import Vue from 'vue'

export default {
  SET_USERS(state, users) {
    let userNames
    if (!users || !users.items) userNames = []
    else {
      userNames = users.items.map(i => ({
        id: i.id,
        name: i.login,
        avatar: i.avatar_url,
        reposUrl: i.repos_url
      }))
    }
    Vue.set(state, 'users', userNames)
  },
  SET_USER_ID(state, repository) {
    Vue.set(state, 'activeUser', repository)
  },
}

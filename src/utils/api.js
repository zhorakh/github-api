const searchUsersURL = (username) => {
  return `https://api.github.com/search/users?q=${username}`
}

const getUserURL = (userId) => {
  return `https://api.github.com/user/${userId}`
}
  
export default {
  async searchUsers(username) {
    try {
      const response = await fetch(searchUsersURL(username))
      if (!response.ok) throw response
      return response.json()
    } 
    catch (exception) {
      console.log(exception)
      return []
    }
  },
  async getUser(userId) {
    try {
      const response = await fetch(getUserURL(userId))
      if (!response.ok) throw response
      return response.json()
    } 
    catch (exception) {
      console.log(exception)
      return []
    }
  },
}
  
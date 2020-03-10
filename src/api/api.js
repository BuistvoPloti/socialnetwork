import * as axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "a77def10-e357-40db-aba3-130633e24ef9"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 8) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`/follow/${userId}`, {})
  },
  unfollow(userId) {
    return instance.delete(`/follow/${userId}`)
  }
}



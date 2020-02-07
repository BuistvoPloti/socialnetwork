const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
  users: [
    // { id: 1, photoUrl:'https://static.podborki.com/uploads/user_image/0/21/21135/small_avatar.jpg', followed: true, fullName: 'zazinnik', status: 'online', location: { city: 'karkiv', country: 'ukraina' } },
    // { id: 2, photoUrl:'https://static.podborki.com/uploads/user_image/0/21/21135/small_avatar.jpg', followed: false, fullName: 'kolashb', status: 'offline', location: { city: 'kyiv', country: 'ukraina' } },
    // { id: 3, photoUrl:'https://static.podborki.com/uploads/user_image/0/21/21135/small_avatar.jpg', followed: true, fullName: 'sanya', status: 'online', location: { city: 'krim', country: 'ukraina' } }
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}


export default usersReducer
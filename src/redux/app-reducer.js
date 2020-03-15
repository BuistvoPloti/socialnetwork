import {authAPI} from "../api/api"
import {stopSubmit} from "redux-form"
import {getAuthUserData} from "./auth-reducer"

const SET_INITIALIZED_SUCCESSED = 'SET_INITIALIZED_SUCCESSED'

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESSED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESSED})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  //other dispatches
  Promise.all([promise])
    .then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
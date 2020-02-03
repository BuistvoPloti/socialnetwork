const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  messages: [
    { id: 1, message: 'haro' },
    { id: 2, message: 'priver' },
    { id: 3, message: 'okvha' },
    { id: 4, message: 'hru rn' }
  ],
  dialogs: [
    { id: 1, name: 'oskar ezih', ava: 'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
    { id: 2, name: 'maksis zazinim', ava: 'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
    { id: 3, name: 'artem barabashkinzov', ava: 'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
    { id: 4, name: 'arbar2000bytkevuchys', ava: 'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' }
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({ id: 43, message: body })
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default dialogsReducer
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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 43, message: body }]
      }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}


export default dialogsReducer
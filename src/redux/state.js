const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'haro', likesCount: 24 },
        { id: 2, message: 'priver', likesCount: 11 }
      ],
      newPostText: 'myuuuuiiii'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'haro' },
        { id: 2, message: 'priver' },
        { id: 3, message: 'okvha' },
        { id: 4, message: 'hru rn' }
      ],
      dialogs: [
        { id: 1, name: 'oskar ezih', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
        { id: 2, name: 'maksis zazinim', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
        { id: 3, name: 'artem barabashkinzov', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' },
        { id: 4, name: 'arbar2000bytkevuchys', ava:'https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg' }
      ],
      newMessageBody: '' 
    },
    friends: {
      topThreeFriends: [
        { id: 1, name: 'sanya kakashnik', ava:'https://www.okino.ua/media/var/news/2018/10/04/venom.jpg' },
        { id: 2, name: 'grigoriy libidko', ava:'https://www.vbetnews.com/wp-content/uploads/2020/01/EFBEaaSXYAMMIl2.jpg' },
        { id: 3, name: 'dimuch', ava:'https://pbs.twimg.com/profile_images/1106202296801595392/99Ovyotd_400x400.jpg' },
      ]
    }
  },
  _callSubscriber() {
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if(action.type === ADD_POST) {
      let newPost = {
        id: 4,
          message: this._state.profilePage.newPostText,
          likesCount: 13
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({ id:43, message: body })
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewPostActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
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

window.store = store

export default store;
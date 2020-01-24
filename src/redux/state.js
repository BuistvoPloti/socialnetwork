import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

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

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //this._state.topThreeFriends = profileReducer(this._state.topThreeFriends, action)
    this._callSubscriber(this._state)
  }
}

window.store = store

export default store;
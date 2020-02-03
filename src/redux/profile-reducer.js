const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'haro', likesCount: 24 },
    { id: 2, message: 'priver', likesCount: 11 }
  ],
  newPostText: 'myuuuuiiii'
}

const profileReducer = (state = initialState, action) => {  
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
          message: state.newPostText,
          likesCount: 13
        }
        state.posts.push(newPost)
        state.newPostText=''
      return state
    case UPDATE_NEW_POST_TEXT: 
      state.newPostText = action.newText
      return state
    default: 
      return state
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

export default profileReducer
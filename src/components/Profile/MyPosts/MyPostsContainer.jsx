import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {compose} from "redux"

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (text) => {
			let action = updateNewPostActionCreator(text)
			dispatch(action)
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)
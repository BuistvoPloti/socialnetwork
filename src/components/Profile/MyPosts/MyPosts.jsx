import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form"

const MyPosts = (props) => {
	let postsElements = 
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
	
	let onAddPost = () => {
		props.addPost()
	}

	let addNewPost = (values) => {
		props.addPost(values.newPostBody)
	}

	return (
		<div className={s.postsBlock}>
			<h1>My posts</h1>
			<AddPostReduxForm onSubmit={addNewPost}/>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={'textarea'} name={'newPostBody'} placeholder={'Sample text'} />
			</div>
			<div className={s.addNewPost}>
				<button >Add new post</button>
			</div>
		</form>
	)
}

const AddPostReduxForm = reduxForm({
	form: 'addPostForm'
})(AddPostForm)

export default MyPosts;
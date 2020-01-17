import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div>
			my posts
			<div>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<button>add new post</button>
			</div>
			<div className={s.posts}>
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;
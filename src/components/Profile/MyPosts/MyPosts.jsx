import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div className={s.postsBlock}>
			<h1>My posts</h1>
			<div>
				<div>
					<textarea id="" cols="30" rows="10"></textarea>
				</div>
				<div className={s.addNewPost}>
					<button>add new post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message='hello, hru rn?' likesCount='34' />
				<Post message='its my post lol' likesCount='13' />
			</div>
		</div>
	);
}

export default MyPosts;
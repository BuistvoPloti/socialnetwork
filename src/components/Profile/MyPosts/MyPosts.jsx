import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
	let postsData = [
    { id: 1, message: 'haro', likesCount: 24},
    { id: 2, message: 'priver', likesCount: 11 }
	]
	
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
				<Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
				<Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
			</div>
		</div>
	);
}

export default MyPosts;
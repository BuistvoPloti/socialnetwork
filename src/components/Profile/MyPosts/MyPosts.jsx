import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
	let posts = [
		{ id: 1, message: 'haro', likesCount: 24 },
		{ id: 2, message: 'priver', likesCount: 11 }
	]

	let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;
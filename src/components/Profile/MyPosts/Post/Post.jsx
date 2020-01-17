import React from 'react';
import s from './Post.module.css';

const Post = () => {
	return (
		<div>
			<div className={s.item}>
				<img src="https://i1.sndcdn.com/avatars-000431515917-ddfnl5-t500x500.jpg" alt="" />
				post 1
				<div>
					<span>like</span>
				</div>
			</div>
		</div>
	);
}

export default Post;
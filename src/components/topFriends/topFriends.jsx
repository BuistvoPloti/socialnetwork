import React from 'react';
import s from './topFriends.module.css';

const TopFriends = (props) => {
	return (
		<div>
			<div className={s.friendsNav}>
				<img src={props.ava} className={s.ava} alt="" />
				{props.name}
			</div>
		</div>
	);
}

export default TopFriends;
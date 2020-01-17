import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img className={s.bg} src='http://walldiskpaper.com/wp-content/uploads/2014/10/Sea-Wallpaper-Traveling-Holiday-Sea.jpg' />
			</div>
			<div>
				ava + description
      </div>
			<MyPosts />
		</div>
	);
}

export default Profile;
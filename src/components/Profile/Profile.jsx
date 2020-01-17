import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
	return (
		<div>
			<div>
				<img className={s.bg} src='https://images.spasibovsem.ru/catalog/original/plyazh-nissi-beach-kipr-ajya-napa-otzyvy-1370722388.jpg' />
			</div>
			<div>
				ava + description
      </div>
			<MyPosts />
		</div>
	);
}

export default Profile;
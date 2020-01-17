import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={s.bg} src='https://images.spasibovsem.ru/catalog/original/plyazh-nissi-beach-kipr-ajya-napa-otzyvy-1370722388.jpg' />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
      </div>
		</div>
	);
}

export default ProfileInfo;
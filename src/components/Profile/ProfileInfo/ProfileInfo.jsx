import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader"
import userPhoto from "../../../assets/images/user.jpg"
import styles from "../../Users/Users.module.css"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div>
			{/*<div>
				<img className={s.bg} src='https://images.spasibovsem.ru/catalog/original/plyazh-nissi-beach-kipr-ajya-napa-otzyvy-1370722388.jpg' />
			</div>
			*/}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt=""/>
      </div>

			<ProfileStatus status={'helloosx'}/>

			<div>
				{
					Object.entries(props.profile.contacts).map(([key, value]) => value ? <div>{key}: {value}</div> : null )
				}
			</div>
		</div>
	);
}

export default ProfileInfo;
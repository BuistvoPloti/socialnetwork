import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader"
import userPhoto from "../../../assets/images/user.jpg"
import styles from "../../Users/Users.module.css"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large ? profile.photos.large : userPhoto} alt=""/>
      </div>

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

      <div>
        {
          Object.entries(profile.contacts).map(([key, value]) => value ? <div>{key}: {value}</div> : null)
        }
      </div>
    </div>
  );
}

export default ProfileInfo;
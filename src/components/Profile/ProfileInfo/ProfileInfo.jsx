import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader"
import userPhoto from "../../../assets/images/user.jpg"
import styles from "../../Users/Users.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
    setEditMode(false)
  }

  return (
    <div className={s.descriptionBlock}>
      <div>
        <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt=""/>
      </div>
      {isOwner && <input type={'file'} onChange={onMainSelected}/>}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      {editMode
        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
        : <ProfileData goToEditMode={() => {
          setEditMode(true)
        }} profile={profile} isOwner={isOwner}/>}
    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      <div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
      </div>
      <div>
        <b>Full name</b> : {profile.fullName}
      </div>
      <div>
        <b>About me </b> : {profile.aboutMe || 'Anonymous'}
      </div>
      <div>
        <b>Looking for a job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      <div>
        <b>Job description</b> : {profile.lookingForAJobDescription || 'No job description'}
      </div>
      <div>
        <b>Contacts</b>: <div className={s.contact}>{Object.entries(profile.contacts).map(([key, value]) => (
        <Contact key={key} contactTitle={key} contactValue={value}/>))}</div>
      </div>
    </div>
  )
}

export const Contact = ({contactTitle, contactValue}) => {
  return (contactValue ? <div><b>{contactTitle}</b>: {contactValue}</div> : null)
}
//(value ? <div>{key}: {value}</div> : null))
export default ProfileInfo;
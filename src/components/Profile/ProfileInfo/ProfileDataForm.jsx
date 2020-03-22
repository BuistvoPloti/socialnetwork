import React from "react"
import s from "./ProfileInfo.module.css"
import {CreateField, Input, Textarea} from "../../common/FormsControls/FormsControls"
import {Contact} from "./ProfileInfo"
import {reduxForm} from "redux-form"

const ProfileDataForm = ({handleSubmit, profile}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
       <button>Save</button>
      </div>
      <div>
        <b>Full name</b> : {CreateField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>About me </b> : {profile.aboutMe || 'anonymous'}
        {CreateField('About me', 'aboutMe', [], Textarea)}
      </div>
      <div>
        <b>Looking for a job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
        {CreateField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
      </div>
      <div>
        <b>My skills</b> : {profile.lookingForAJobDescription}
        {CreateField('My skills', 'lookingForAJobDescription', [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>: <div className={s.contact}>{Object.entries(profile.contacts).map(([key, value]) => (
        <Contact key={key} contactTitle={key} contactValue={value}/>))}</div>
      </div>
    </form>
  )
}

const ProfileDataReduxForm =reduxForm({form: 'login'})(ProfileDataForm)

export default ProfileDataReduxForm
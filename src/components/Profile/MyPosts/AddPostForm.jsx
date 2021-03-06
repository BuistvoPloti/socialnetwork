import {maxLengthCreator, required} from "../../../utils/validators/validators"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../common/FormsControls/FormsControls"
import s from "./MyPosts.module.css"
import React from "react"

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostBody'} placeholder={'Sample text'}
               validate={[required, maxLength10]}/>
      </div>
      <div className={s.addNewPost}>
        <button>Add new post</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'addPostForm'})(AddPostForm)
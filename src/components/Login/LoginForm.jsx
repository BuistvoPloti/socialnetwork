import {Field, reduxForm} from "redux-form"
import React from "react"
import {CreateField, Input} from "../common/FormsControls/FormsControls"
import {required} from "../../utils/validators/validators"
import styles from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField('Email', 'email', [required], Input)}
      {CreateField('Password', 'password', [required], Input, {type: 'password'})}
      {CreateField(null, 'rememberMe', [], Input, {type: 'checkbox'}, "Remember me")}

      {error && <div className={styles.formSummaryError}>
        {`An error occurred: ${error}`}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)
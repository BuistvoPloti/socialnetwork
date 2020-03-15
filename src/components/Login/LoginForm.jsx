import {Field, reduxForm} from "redux-form"
import React from "react"
import {Input} from "../common/FormsControls/FormsControls"
import {required} from "../../utils/validators/validators"
import styles from "../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'}
               validate={[required]} type={'password'}
               component={Input}/>
      </div>
      <div>
        <Field type="checkbox" checked='checked' name={'rememberMe'} component={Input}/> Remember me
      </div>
      {props.error && <div className={styles.formSummaryError}>
        {`An error occurred: ${props.error}`}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)
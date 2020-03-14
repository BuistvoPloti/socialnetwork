import {Field, reduxForm} from "redux-form"
import React from "react"
import {Input} from "../common/FormsControls/FormsControls"
import {required} from "../../utils/validators/validators"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'}
               validate={[required]}
               component={Input}/>
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={Input}/> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)
import React from "react"
import LoginForm from "./LoginForm"
import {connect} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {Redirect} from "react-router-dom"

const Login = ({login, isAuth}) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
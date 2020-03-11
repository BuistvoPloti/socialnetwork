import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom"

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/938d0a9202421.560ca5fe55ca5.png' alt={''}/>
			<div className={s.loginBlock}>
				{ props.isAuth ? <p>logged in as {props.login} </p> : <NavLink to={'/login'}> Login </NavLink> }

			</div>
		</header>
	);
}
//21"33
export default Header;
import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import TopFriends from './../topFriends/topFriends'

const Navbar = (props) => {
  console.log(props)
  let topThreeFriends = props.state.topThreeFriends.map(f => <TopFriends name={f.name} ava={f.ava} />)
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      {topThreeFriends}
    </nav>
  );
}

export default Navbar;
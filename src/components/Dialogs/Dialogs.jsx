import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  );
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='oskar ezih' id='1'/>
        <DialogItem name='maksis zazinim' id='2'/>
        <DialogItem name='artem barabash' id='3'/>
        <DialogItem name='arbar2000' id='4'/>
      </div>
      <div className={s.messages}>
        <Message message='hey'/>
        <Message message='halo'/>
        <Message message='ola'/>
        <Message message='bawn jorno'/>
      </div>
    </div>
  )
}

export default Dialogs;
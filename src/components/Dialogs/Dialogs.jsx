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

  let dialogs = [
    { id: 1, name: 'oskar ezih' },
    { id: 2, name: 'maksis zazinim' },
    { id: 3, name: 'artem barabashkinzov' },
    { id: 4, name: 'arbar2000bytkevuchys' }
  ]

  let messages = [
    { id: 1, message: 'haro' },
    { id: 2, message: 'priver' },
    { id: 3, message: 'okvha' },
    { id: 4, message: 'hru rn' }
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = messages.map(m => <Message message={m.message} />)
    
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
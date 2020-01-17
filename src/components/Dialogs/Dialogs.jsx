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
  let dialogsData = [
    { id: 1, name: 'oskar ezih' },
    { id: 2, name: 'maksis zazinim' },
    { id: 3, name: 'artem barabashkinzov' },
    { id: 4, name: 'arbar2000bytkevuchys' }
  ]
  
  let messagesData = [
    { id: 1, message: 'haro' },
    { id: 2, message: 'priver' },
    { id: 3, message: 'okvha' },
    { id: 4, message: 'hru rn' }
  ]


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id}/>
        <Message message={messagesData[2].message} id={messagesData[2].id} />
        <Message message={messagesData[3].message} id={messagesData[3].id} />
      </div>
    </div>
  )
}

export default Dialogs;
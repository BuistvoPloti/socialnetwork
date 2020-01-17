import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog +' '+ s.active}>
            oskar ezih
        </div>
        <div className={s.dialog}>
            zazynim maksar
        </div>
        <div className={s.dialog}>
            oleg matuga
        </div>
        <div className={s.dialog}>
            sanya kalanduk
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hru rn?</div>
        <div className={s.message}>Missin u rn</div>
      </div>
    </div>
  )
}

export default Dialogs;
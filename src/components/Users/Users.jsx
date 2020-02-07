import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([{ id: 1, photoUrl: 'https://static.podborki.com/uploads/user_image/0/21/21135/small_avatar.jpg', followed: true, fullName: 'zazinnik', status: 'online', location: { city: 'karkiv', country: 'ukraina' } },
    { id: 2, photoUrl: 'https://static.podborki.com/uploads/user_image/0/21/21135/small_avatar.jpg', followed: false, fullName: 'kolashb', status: 'offline', location: { city: 'kyiv', country: 'ukraina' } },
    { id: 3, photoUrl: 'https://static.podborki.com/uploads/user_image/0/21/21135/small_avatar.jpg', followed: true, fullName: 'sanya', status: 'online', location: { city: 'krim', country: 'ukraina' } }
    ])
  }
  return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="" className={styles.userPhoto} />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>
      )}
    </div>
  );
}

export default Users
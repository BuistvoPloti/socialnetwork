import React from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user.jpg"
import {NavLink} from "react-router-dom"

let User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.id}
                 className={styles.userPhoto}/>
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button title={user.id} disabled={followingInProgress
              .some(id => id === user.id)}
                      onClick={() => {
                        unfollow(user.id)
                      }}>
              Unfollow</button>
            : <button title={user.id} disabled={followingInProgress
              .some(id => id === user.id)}
                      onClick={() => {
                        follow(user.id)
                      }}>
              Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
      </span>
    </div>
  )
}

export default User
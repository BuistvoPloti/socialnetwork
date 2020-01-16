import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.bg} src='http://walldiskpaper.com/wp-content/uploads/2014/10/Sea-Wallpaper-Traveling-Holiday-Sea.jpg' />
            </div>
            <div>
                ava
            </div>
            <div className={s.posts}>
                posts
            <div className={s.item}>
                    new post
            </div>
            <div className={s.item}>
                    post 1
            </div>
            </div>
        </div>
    );
}

export default Profile;
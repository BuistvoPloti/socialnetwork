import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/938d0a9202421.560ca5fe55ca5.png' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img className='bg' src='http://walldiskpaper.com/wp-content/uploads/2014/10/Sea-Wallpaper-Traveling-Holiday-Sea.jpg' />
        </div>
        <div>
          ava
        </div>
        <div>
          posts
          <div>
            new post
          </div>
          <div>
            post 1 
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderComponent from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderComponent/>
      {/* state={props.state.sidebar}  v navbar! nizhe*/}
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}/>

        <Route path='/dialogs'
               render={() => <DialogsContainer/>}/>

        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/users' render={() => <UsersContainer/>}/>

        <Route path='/login' render={() => <Login/>}/>
      </div>
    </div>
  );
}

export default App;
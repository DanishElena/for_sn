import React from 'react';
import './App.css';
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";
import Menu from "./Components/Header/Navbar/Menu";
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Friends from "./Components/Friends/Friends";
import store1 from "./redux/store";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/Navbar/HeaderContainer";
import Login from "./Login/Login";


const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Menu/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer />}/>
                    <Route path='/users' render={() =>
                    <UsersContainer />}/>
                    <Route path='/login' render={() =>
                    <Login />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <Friends store1={store1}/>
        </div>
    )
}


export default App;
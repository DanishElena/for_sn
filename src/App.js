import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";
import Menu from "./Components/Header/Navbar/Menu";
import {Route} from 'react-router-dom';
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Menu/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <Friends state={props.state}/>
        </div>
    )
}

export default App;
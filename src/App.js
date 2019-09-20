import React, {Component} from 'react';
import './App.css';
import News from "./Components/News";
import Music from "./Components/Music";
import Settings from "./Components/Settings";
import Menu from "./Components/Header/Navbar/Menu";
import {Route, withRouter} from 'react-router-dom';

import Friends from "./Components/Friends/Friends";
import store1 from "./redux/store";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/Navbar/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./Components/Preloader";

const DialogsContainer  = React.lazy(()=> import ("./Components/Dialogs/DialogsContainer"));
const ProfileContainer  = React.lazy(()=> import ("./Components/Profile/ProfileContainer"));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
 if(!this.props.initialized) {
     return <Preloader />
 }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Menu/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<div>...loading</div>}>
                            <ProfileContainer/>
                        </React.Suspense>}}/>
                    <Route path='/dialogs' render={() => {
                     return <React.Suspense fallback={<div>...loading</div>}>
                        <DialogsContainer/>
                        </React.Suspense>}}/>
                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>
                    <Route path='/login' render={() =>
                        <Login/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <Friends store1={store1}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(withRouter,
                       connect(mapStateToProps, {initializeApp}))(App)
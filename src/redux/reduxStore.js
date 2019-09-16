import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./progfileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;
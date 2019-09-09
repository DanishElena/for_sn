import {combineReducers, createStore} from "redux";
import profileReducer from "./progfileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        friendsArea: friendsReducer
    }
);

let store = createStore(reducers);

export default store;
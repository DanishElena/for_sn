import {usersAPI} from "../api/api";
import {setUsers, toggleIsFetching} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
              ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}


export const getLoginToHeader = () => {
    return (dispatch) => {
        usersAPI.getLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, login, userId} = data.data;
                   dispatch(setAuthUserData(email, login, userId));
                }
            })
    }
}

export const setAuthUserData = (email, login, userId) => ({type: SET_USER_DATA, data: {email, login, userId} })

export default authReducer;
import {usersAPI} from "../api/api";



const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
              ...action.payload
            }

        default:
            return state;
    }
}

export const getLoginToHeader = () => {
    return (dispatch) => {
        usersAPI.getLogin()
            .then(data => {
                    let {login, password, rememberMe} = data.data;
                   dispatch(setAuthUserData(login, password, rememberMe,  true));
            })
    }
}

export const login = (login, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login(login, password, rememberMe)
            .then(data => {
                    let {login, password, rememberMe} = data.data;
                   dispatch(getLoginToHeader(login, password, rememberMe));
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        usersAPI.logout();
            dispatch(setAuthUserData(null, null, false, false));
            }
}

export const setAuthUserData = (login, password, rememberMe, isAuth) => ({type: SET_USER_DATA, payload: {login, password, rememberMe, isAuth} })

export default authReducer;
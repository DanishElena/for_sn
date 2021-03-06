import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users }

        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage)  => ({type: SET_CURRENT_PAGE , currentPage })
export const toggleIsFetching = (isFetching)  => ({type: TOGGLE_IS_FETCHING , isFetching })

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data));
        })
    }
}


export const follow = (userId) => {
    return (dispatch) =>
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
            });
    }

export const unfollow = (userId) => {
    return (dispatch) =>
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 1) {
                    dispatch(unfollowSuccess(userId));
                }
            });
}



export default usersReducer;
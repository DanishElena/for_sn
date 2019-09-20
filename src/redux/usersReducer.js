import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../object-helpers";

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
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})

            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
export const setCurrentPage = (page)  => ({type: SET_CURRENT_PAGE , page })
export const toggleIsFetching = (isFetching)  => ({type: TOGGLE_IS_FETCHING , isFetching })

export const requestUsers = (page, pageSize) => {
   return async (dispatch) => {
        dispatch(toggleIsFetching(true));
       dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data));

    }
}


export const follow = (userId) => {
    return async (dispatch) =>
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

// const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
//
//     let response = await apiMethod(userId);
//     if (response.data.resultCode == 0) {
//         dispatch(actionCreator(userId));
//     }
// }
//
// export const follow = (userId) => {
//     return async (dispatch) => {
//         followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
//     }
// }
// export const unfollow = (userId) => {
//     return async (dispatch) => {
//         followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
//     }
// }

export default usersReducer;
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    profile: [],
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 10},
        {id: 2, message: "Hi, it is my first post", likes: 12},
        {id: 3, message: "I like cats!", likes: 14}
    ],
    myPostText:
        'Cats everywhere!',
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.myPostText,
                likes: 1
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
            };
            return stateCopy;

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;

    }
}

export const addPostAction = (myPostText) => ({type: ADD_POST, myPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default profileReducer;


export const getProfileToContainer = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(data));

        dispatch(toggleIsFetching(false));
    }
}

// export const updateUserStatus = (status, userId) => {
//     return (dispatch) => {
//         profileAPI.updateStatus(status, userId)
//             .then(data => {
//                 dispatch(setUserProfile(data));
//             })
//     }
// }


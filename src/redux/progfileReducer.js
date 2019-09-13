const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [ ],
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 10},
        {id: 2, message: "Hi, it is my first post", likes: 12},
        {id: 3, message: "I like cats!", likes: 14}
    ],
    newPostText:
        'Cats everywhere!',
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 1
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
              };
           return stateCopy;

        case UPDATE_NEW_POST_TEXT:
          return {
              ...state,
              newPostText: action.newText
          };
        case SET_USER_PROFILE: {
            return { ...state, users: action.users}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;

    }
}

export const addPostAction = () => ({type: ADD_POST});

export const updateNewPost = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (users) => ({type: SET_USER_PROFILE, users});
export const toggleIsFetching = (isFetching)  => ({type: TOGGLE_IS_FETCHING , isFetching })
export default profileReducer;
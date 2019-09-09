const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialState =  {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 10},
        {id: 2, message: "Hi, it is my first post", likes: 12},
        {id: 3, message: "I like cats!", likes: 14}
    ],
    newPostText:
        'Cats everywhere!'
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likes: 1
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
export default profileReducer;
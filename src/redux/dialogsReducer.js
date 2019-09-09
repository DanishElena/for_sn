const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let messageBody = state.newMessageText;
            state.newMessageText = '';
            state.MessagesData.push({id: 7, message: messageBody});
            return state;
        default:
            return state;
    }

}


export const sendMessageAction = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextAction = (messageBody) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: messageBody
    }
}
    export default dialogsReducer;
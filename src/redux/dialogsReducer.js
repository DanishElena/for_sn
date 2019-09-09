const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    MessagesData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'I like ice-cream'},
        {id: 3, message: 'I need to sleep'},
        {id: 4, message: 'I want to go to Ekaterinburg'},
        {id: 5, message: 'Goodbye!'}
    ],

    DialogsData:
        [
            {id: 1, name: 'Tomas'},
            {id: 2, name: 'Silvester'},
            {id: 3, name: 'Keks'},
            {id: 4, name: 'Semen'},
            {id: 5, name: 'Salvador'}
        ],
    newMessageText: '',
};

const dialogsReducer = (state=initialState, action) => {
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
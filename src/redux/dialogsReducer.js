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
        ]

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessageText;
            return {
                ...state,
                MessagesData: [...state.MessagesData, {id: 6, message: newMessageText}]
            };
        default:
            return state;
    }

}


export const sendMessageAction = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});


    export default dialogsReducer;
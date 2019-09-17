import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store1 = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, message: "Hi, how are you?", likes: 10},
                    {id: 2, message: "Hi, it is my first post", likes: 12},
                    {id: 3, message: "I like cats!", likes: 14}
                ],
                newPostText:
                    'Cats everywhere!'
            },

        dialogsPage: {
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
        },

        friendsArea: [
            {id: 1, name: 'Tomas', ava: 'https://house-animals.ru/sites/default/files/media/user-1/trehcvetnaya-koshka-256.jpg'},
            {id: 2, name: 'Silvester', ava: 'https://ranbus.fra1.cdn.digitaloceanspaces.com/images/avatars/2019/01/154745223793wK7X5xCi.jpg'},
            {id: 3, name: 'Keks', ava: 'https://house-animals.ru/sites/default/files/media/user-1/grey-cat-256.jpg'},
            {id: 4, name: 'Semen', ava: 'https://house-animals.ru/sites/default/files/media/user-1/redhead-cat-256.jpg'},
            {id: 5, name: 'Salvador', ava: 'https://www.stylist.co.uk/images/app/uploads/2017/10/24184627/d82c29b23a574d0de11df28351edde1e-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'}
        ],

        callSubscriber() {
            console.log('state changed');
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this.callSubscriber = observer;
        },

        dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action); //обновление стейта с помощью редьюсера
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this.callSubscriber(this._state)  //уведомоление подписчика
        }
    }
}

window.store1 = store1;
export default store1;
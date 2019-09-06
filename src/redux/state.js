let store = {
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
        },

        friendsArea: [
            {
                id: 1,
                name: 'Tomas',
                ava: 'http://image1.thematicnews.com/uploads/topics/preview/00/12/36/04/e1f1aee93d_256crop.jpg'
            },
            {
                id: 2,
                name: 'Silvester',
                ava: 'https://static.greatbigcanvas.com/images/square/getty-images/bengal-cat-sitting-on-weathered-deck-,1102846.jpg?max=128'
            },
            {id: 3, name: 'Keks', ava: 'https://cdn140.picsart.com/268649060009201.jpg?c256x256'},
            {
                id: 4,
                name: 'Semen',
                ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHaVUareLZhmdI3_DQQZZiYk-lbrFirA4EFzWcKDzJ1Pb7ROZ'
            },
            {id: 5, name: 'Salvador', ava: 'https://cdn140.picsart.com/257115989016202.png?c256x256'}
        ],
    },
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
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likes: 1
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this.callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state)
        }
    }
}


window.store = store;
export default store;
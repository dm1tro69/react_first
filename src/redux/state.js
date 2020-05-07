let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 1},
                {id: 3, message: 'How is you?', likesCount: 15},
                {id: 4, message: 'Yo', likesCount: 5},
                {id: 5, message: 'Yo', likesCount: 54}
            ],
            newPostText: 'it-kamas'


        },
        messagesPage: {
            messagesData: [
                {id: 1, text: 'Hi'},
                {id: 2, text: 'Yo'},
                {id: 3, text: 'How is you?'},
                {id: 4, text: 'Yo'},
                {id: 5, text: 'Yo'}
            ],
            dialogData: [
                {id: 1, name: 'Dmytro'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Max'},
                {id: 5, name: 'Sweta'}
            ]
        }

    },
    _callSubscriber() {
        console.log('state change')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export default store
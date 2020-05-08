import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import sidebarReducer from "./sidebar_reducer";



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
            ],
            newMessageBody: ''
        },
        sidebar: {}

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }

};






export default store
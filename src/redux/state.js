import {rerenderEntireTree} from "../render";

let state = {
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

};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state
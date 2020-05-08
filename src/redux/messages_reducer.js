const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
        };

const messagesReducer = (state=initialState, action) => {
        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                 state.newMessageBody = action.body;
                 return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
            state.newMessageBody = ' ';
            state.messagesData.push({id: 6, text: body});
                 return state;
            default:
                return state;
        }

};

export const sendMessageCreator = () =>{


    return {
        type: SEND_MESSAGE
    }
    };
export const updateNewMessageBodyCreator = (body) =>{

    return {
        type: UPDATE_NEW_MESSAGE_BODY,

        body: body
    }
}


export default messagesReducer;
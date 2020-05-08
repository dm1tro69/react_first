const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
            postData: [
                {id: 1, message: 'Hi, how you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 1},
                {id: 3, message: 'How is you?', likesCount: 15},
                {id: 4, message: 'Yo', likesCount: 5},
                {id: 5, message: 'Yo', likesCount: 54}
            ],
            newPostText: 'it-kamas'
        };

const profileReducer = (state=initialState, action) => {

    if (action.type === ADD_POST){
            let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.postData.push(newPost);
        state.newPostText = '';
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            state.newPostText = action.newText;
          }

      return (
          state
      )
    };

export const addPostActionCreator = () =>{


    return {
        type: ADD_POST
    }
    };
export const updateNewPostTextActionCreator = (text) =>{

    return {
        type: UPDATE_NEW_POST_TEXT,

        newText: text
    }
}

 export default profileReducer;
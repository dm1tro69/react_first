import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {

    let state = props.store.getState();

     // let postsElement = props.postData.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>);
     //
     // let newPostElement = React.createRef();

     let addPost = () => {
         // props.addPost()
         props.store.dispatch(addPostActionCreator());

     };

     let onPostChange = (text) => {
         // let text = newPostElement.current.value;
         // props.updateNewPostText(text)
         let action = updateNewPostTextActionCreator(text);
         props.store.dispatch(action);


     };

    return (
       <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                posts={state.profilePage.postData}
                newPostText={state.profilePage.newPostText}
       />
    )
}
export default MyPostsContainer
import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {





    return (
        <div>
            <ProfileInfo/>

            <MyPostsContainer
                store={props.store}
                     //          postData={props.profilePage}
                     // dispatch={props.dispatch}
                     // profilePage={props.newPostText}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>

    )
}
export default Profile
import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
                <div>

                <img src="https://media.istockphoto.com/photos/microscopic-view-of-coronavirus-a-pathogen-that-attacks-the-tract-picture-id1200706447?k=6&m=1200706447&s=612x612&w=0&h=_Yi0dWqHn9tpO-MqC3jLg-qP66_e_8J-B9mO7Iejjqk=" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
              <MyPosts/>
            </div>

    )
}
export default Profile
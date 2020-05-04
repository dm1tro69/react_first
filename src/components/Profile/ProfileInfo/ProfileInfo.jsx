import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>

            <div>

                <img
                    src="https://media.istockphoto.com/photos/microscopic-view-of-coronavirus-a-pathogen-that-attacks-the-tract-picture-id1200706447?k=6&m=1200706447&s=612x612&w=0&h=_Yi0dWqHn9tpO-MqC3jLg-qP66_e_8J-B9mO7Iejjqk="
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>

    )
}
export default ProfileInfo
import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://pickaface.net/gallery/avatar/29498544_170510_0240_z76a8.png" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}Like</span>
            </div>
        </div>


    )
}
export default Post
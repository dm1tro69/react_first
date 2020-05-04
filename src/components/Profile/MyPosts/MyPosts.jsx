import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {


     let postsElement = props.postData.map(p =>  <Post message={p.message} likesCount={p.likesCount}/>);


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
                {/*<Post message={postData[0].message} likesCount={postData[0].likesCount}/>*/}
                {/*<Post message={postData[1].message} likesCount={postData[1].likesCount}/>*/}

            </div>


        </div>


    )
}
export default MyPosts
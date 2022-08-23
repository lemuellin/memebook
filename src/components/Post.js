import React from 'react'
import uniqid from "uniqid";

const Post = (post) => {

    return(
        <div className="card" style={{width: "50vw"}} key={uniqid()}>
            <img src={post.imgURL} className="card-img-top" alt="post"/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">@{post.username}</h5>
                    <h6 className="card-text">{post.timestamp}</h6>
                </div>
                <h6 className="card-text">{post.caption}</h6>
                <p>Comments... etc</p>
            </div>
        </div>
    )
}

export default Post;
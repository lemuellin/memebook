import React from 'react'

const Post = (post) => {
    // console.log(post);
    return(
        <div className="card" style={{width: "50vw"}} key={post.key}>
            <img src={post.img} className="card-img-top" alt="post photo"/>
            <div className="card-body">
                <h5 className="card-title">{post.username}</h5>
                <p className="card-text">{post.caption}</p>
                <h6>Comments... etc</h6>
            </div>
        </div>
    )
}

export default Post;
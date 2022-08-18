import React from 'react'
import uniqid from "uniqid";

import { storage } from '../firebase-config';
import { ref, getDownloadURL } from "firebase/storage";

const Post = (post) => {
    const address = 'gs://instaclone-development.appspot.com/' + post.img + '.jpg';
    const storageRef = ref(storage, address);
    
    getDownloadURL(storageRef)
    .then((url) => {
        // Insert url into an <img> tag to "download"
        const img = document.getElementById(post.id);
        img.setAttribute('src', url);
    })

    return(
        <div className="card" style={{width: "50vw"}} key={uniqid()}>
            <img id={post.id} className="card-img-top" alt="post"/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">@{post.username}</h5>
                    <h6 className="card-text">{post.time}</h6>
                </div>
                <h6 className="card-text">{post.caption}</h6>
                <p>Comments... etc</p>
            </div>
        </div>
    )
}

export default Post;
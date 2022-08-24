import React from 'react'
import uniqid from "uniqid";
import { Button } from 'react-bootstrap';

import { db, storage } from '../firebase-config';
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";


const Post = (post) => {
    // Function - Delete Post
    const deletePost = async () => {
        // Firebase
        await deleteDoc(doc(db, 'posts', post.postID));
        
        // Storage
        // Create a reference to the file to delete
        let address = 'posts/' + post.postID + '/image';
        let imageRef = ref(storage, address);
        // Delete the file
        deleteObject(imageRef).then(() => {
            // File deleted successfully
            console.log('delete from storage');
        }).catch((error) => {
            console.log(error);
        });
    }

    const DeleteButton = () => {
        if (post.userEmail === post.currUser){
            return(
                <Button className='ps-3 align-self-center' variant="dark" onClick={deletePost}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 20 20">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </Button>
            )
        }
    }

    return(
        <div className="card" style={{width: "50vw"}} key={uniqid()}>
            <div className="bg-secondary text-white d-flex justify-content-between" style={{height: "40px"}}>
                <div className='ps-3 align-self-center fw-bolder'>@{post.username}</div>
                <DeleteButton/>
            </div>
            
            <img src={post.imgURL} className="card-img-top" alt="post"/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h6 className="bg-light text-wrap p-2 rounded" style={{width: "40vw"}}>{post.caption}</h6>
                    <h6 className="align-self-center">{post.timestamp}</h6>
                </div>
                <h6>Comments... etc</h6>
                
            </div>
        </div>
    )
}

export default Post;
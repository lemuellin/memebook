import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Post from "../components/Post";

import getAllPosts from '../functions/getAllPosts';

import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const [posts, setPosts] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const updatePosts = async () => {
            let postsList = await getAllPosts();
            setPosts(postsList);
        }
        updatePosts();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(user);
              console.log(uid);
              // ...
            } else {
              // User is signed out
              // ...
              console.log("INVALID SIGN OUT");
              nav('/login');
            }
          });
    },[]);

    return(
        <div>
            <NavBar/>
            <div className="d-flex flex-column align-items-center justify-content-center mt-4 gap-4">
                {posts.map((post)=>Post(post))}
            </div>
        </div>
    );
};

export default HomePage;
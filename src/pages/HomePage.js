import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Post from "../components/Post";

import { db } from "../firebase-config";
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const [posts, setPosts] = useState([]);

    const [update, setUpdate] = useState();
    const updateStatus = () => {
      setUpdate(1);
    }

    const nav = useNavigate();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          nav('/login');
        }
      });
    },[]);

    useEffect(() => {
      const postsRef = collection(db, 'posts');
      const postsQuery = query(postsRef, orderBy('timestamp', 'desc'));
      onSnapshot(postsQuery, (snapshot) => {
        const postsList = [];
        snapshot.docs.forEach((post) => {
          let usernameString = post.data().username;
          let username = usernameString.substring(0, usernameString.indexOf('@'));
          let caption = post.data().caption;
          let imgURL = post.data().image;

          let timestamp = new Date().toString();
          try {
            timestamp = new Date(post.data().timestamp.seconds * 1000 + post.data().timestamp.nanoseconds/1000000).toLocaleDateString();
          } catch (error){
        
          }
          
          postsList.push({username: username, caption: caption, timestamp: timestamp, imgURL: imgURL});
        })
        setPosts(postsList);
      });
      
    },[update]);

    return(
        <div>
            <NavBar updateStatus={updateStatus}/>
            <div className="d-flex flex-column align-items-center justify-content-center mt-4 gap-4">
                {posts.map((post)=>Post(post))}
            </div>
        </div>
    );
};

export default HomePage;
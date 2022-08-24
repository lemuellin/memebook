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
    let currUser;

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.email);
          currUser = user.email;
        }else{
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
          let userEmail = post.data().username;
          let username = userEmail.substring(0, userEmail.indexOf('@'));
          let caption = post.data().caption;
          let imgURL = post.data().image;
          
          let postID = post._document.key.path.segments[6]; 

          let timestamp = new Date().toString();
          try {
            timestamp = new Date(post.data().timestamp.seconds * 1000 + post.data().timestamp.nanoseconds/1000000).toLocaleDateString();
          } catch (error){
            console.log('error to display date');
          }

          postsList.push({username: username, caption: caption, timestamp: timestamp, imgURL: imgURL, userEmail: userEmail, currUser: currUser, postID: postID});
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
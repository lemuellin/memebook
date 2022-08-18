import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Post from "../components/Post";

import getAllPosts from '../functions/getAllPosts';

const HomePage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const updatePosts = async () => {
            let postsList = await getAllPosts();
            setPosts(postsList);
        }
        updatePosts();
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
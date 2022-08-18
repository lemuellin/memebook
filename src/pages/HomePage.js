import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import Post from "../components/Post";

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

const HomePage = () => {
    const [posts, setPosts] = useState([
        {
            username: "@bobaman",
            caption: "Wow, Amazing!",
            img: img1,
            key: 1,
        },
        {
            username: "@dimsumgurl",
            caption: "I like food in general",
            img: img2,
            key: 2,
        },
    ]);

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
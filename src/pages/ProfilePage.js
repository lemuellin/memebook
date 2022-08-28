import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

import { db } from "../firebase-config";
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const ProfilePage = () => {
    const nav = useNavigate();

    const [currUserEmail, setCurrUserEmail] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const currUsername = user.email.substring(0, user.email.indexOf('@'));
                setCurrUserEmail(currUsername);
            }else{
                nav('/login');
            }
          });
    });


    return(
        <div>
            <NavBar/>
            <h1>@{currUserEmail}</h1>
            <Profile currUserEmail={currUserEmail}/>
        </div>
    ); 
};

export default ProfilePage;
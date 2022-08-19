import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from "react-bootstrap";

import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })
    }

    // Google Log In
    const provider = new GoogleAuthProvider();
    const googleLogIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Form className="d-flex flex-column gap-2">
                        <Form.Group id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required></Form.Control>
                        </Form.Group>
                        <Button className="w-100" onClick={(e) => loginUser(e)} type="submit">Log In</Button>
                        <Button className="w-100" variant="success" type="submit" onClick={(e) => googleLogIn(e)}>Log In with Google</Button>
                        <Button className="w-100" variant="info" type="submit">Just Visiting</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;
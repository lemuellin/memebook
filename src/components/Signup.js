import React, { useRef } from 'react'
import { Form, Button, Card } from "react-bootstrap"

export default function Signup() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

  return (
    <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-1">Sign Up</h2>
                <Form className="d-flex flex-column gap-2">
                    <Form.Group id="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="username" ref={usernameRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button className="w-100" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log In.
        </div>
    </div>
  )
}
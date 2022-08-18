import React, { useRef } from 'react'
import { Form, Button, Card } from "react-bootstrap"

export default function Signup() {
    const usernameRef = useRef();
    const passwordRef = useRef();

  return (
    <div>
        <Card>
            <Card.Body>
                {/* <h2 className="text-center mb-1">Monogram</h2> */}
                <Form className="d-flex flex-column gap-2">
                    <Form.Group id="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="username" ref={usernameRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Button className="w-100" type="submit">Log In</Button>
                    <Button className="w-100" variant="success" type="button">Log In with Google</Button>
                    <Button className="w-100" variant="info" type="submit">Just Visiting</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}
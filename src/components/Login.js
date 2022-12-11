import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import logo from '../images/mesa-logo.png'
import { GoogleButton } from 'react-google-button';
import { signInWithGoogle } from '../context/AuthContext';
import {GoogleLogin} from 'react-google-login';


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/content")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }


    return (
        <>
            <img className='logo-login' src={logo} alt="" />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '68vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 m-1" type="submit">Log In</Button>
                            </Form>
                            <div className='w-100 text-center mt-2'>
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div> <hr />
                            <div className="d-flex align-items-center justify-content-center" >OR</div> <hr />
                          <GoogleButton onClick={signInWithGoogle} />
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Need an account? <Link to='/signup'>Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

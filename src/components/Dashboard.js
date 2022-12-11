import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import { Container } from 'react-bootstrap'
import logo from '../images/mesa-logo.png'
import { signInWithGoogle } from '../firebase';


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
      <img className='logo-login' src={logo} alt="" />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '68vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <div>
            <Card>
              <Card.Body>
                <img className="rounded-circle shadow-4 " src={localStorage.getItem('profilePic')} style={{ width: "150px", margin: "auto" }} alt="Avatar" /> <br />
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Hey, </strong>{
                  localStorage.getItem('name')} <hr />
                <strong>Email:</strong> {currentUser.email} <hr />
                <strong>Email:</strong>
                {localStorage.getItem('email')}

                {/* <h2>
                  <img src={localStorage.getItem('profilePic')} alt="" />
                </h2> */}
                
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                  Update Profile
                </Link>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Link to="/"><Button variant="link" onClick={handleLogout}>
                Log Out
              </Button> </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

// export default Dashboard    
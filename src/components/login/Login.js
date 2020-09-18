import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ApiManager from '../../api/module'

const Login = props => {
    const [user, setUser] = useState({})
    
    const handleFieldChange = e => {
        const stateToChange = {...user}
        stateToChange[e.target.id.split("-")[1]] = e.target.value
        setUser(stateToChange)
    }

    const handleLogin = props => {
        ApiManager.login(user)
            .then(response => {
                if ("valid" in response && response.valid && "token" in response) {
                    localStorage.setItem("writeBrain_token", response.token)
                }
            })
    }

    const handleRegister = props => {
        ApiManager.register(user)
            .then(response => {
                if ("token" in response) {
                    localStorage.setItem("writeBrain_token", response.token)
                }
            })
    }

    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control id="login-email" placeholder="email" onChange={handleFieldChange} />
                </Col>
                <Col>
                    <Form.Control id="login-username" placeholder="username" onChange={handleFieldChange} />
                </Col>
                <Col>
                    <Form.Control id="login-password" placeholder="password" onChange={handleFieldChange} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Button variant="primary" size="sm" onClick={handleLogin}>Log In</Button>
                </Col>
                <Col>
                    <Button variant="info" size="sm" onClick={handleRegister}>Register</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Login
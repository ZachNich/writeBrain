import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ApiManager from '../../api/module'

const AuthForm = props => {
    const [user, setUser] = useState({})

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

    const handleFieldChange = e => {
        const stateToChange = {...user}
        stateToChange[e.target.id.split("-")[1]] = e.target.value
        setUser(stateToChange)
    }

    return (
        <Form>
            <Form.Row>
            {props.showRegister ? 
                <Col>
                    <Form.Control id="register-email" placeholder="email" onChange={handleFieldChange} />
                </Col>
            :
            null}
                <Col>
                    <Form.Control id="login-username" placeholder="username" onChange={handleFieldChange} />
                </Col>
                <Col>
                    <Form.Control id="login-password" placeholder="password" onChange={handleFieldChange} />
                </Col>
            {props.showRegister ? 
                <Col>
                    <Form.Control id="register-password" placeholder="password" onChange={handleFieldChange} />
                </Col>
            :
            null}
            </Form.Row>
            <Form.Row>
                <Col>
                    <Button>Submit</Button>
                    <Button>Clear</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default AuthForm
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AuthForm from './AuthForm'

const Login = props => {
    const [show, setShow] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handleClose = () => {
        setShow(false)
        setShowRegister(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    const setRegister = () => {
        handleShow()
        setShowRegister(true)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {showRegister ? 
                    <Modal.Title>Register</Modal.Title>
                    : 
                    <Modal.Title>Log In</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <AuthForm showRegister={showRegister} />
                </Modal.Body>
            </Modal>
            <Button variant="primary" size="sm" onClick={handleShow}>Log In</Button>
            <Button variant="info" size="sm" onClick={setRegister}>Register</Button>
        </>
    )
}

export default Login
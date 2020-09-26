import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from '../login/Login'

const Navi = props => {
    return (
        <Navbar bg="light" variant="light" className="justify-content-between">
            <Navbar.Brand href="/">writeBrain</Navbar.Brand>
            <Nav>
                <Login isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} {...props} />
            </Nav>
        </Navbar>
    )
}

export default Navi
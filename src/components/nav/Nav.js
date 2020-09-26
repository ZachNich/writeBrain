import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Login from '../login/Login'

const Nav = props => {
    return (
        <Navbar bg="light" variant="variant">
            <Navbar.Brand href="/">writeBrain</Navbar.Brand>
            <Nav className="mr-auto">
                <Login isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} {...props} />
            </Nav>
        </Navbar>
    )
}

export default Nav
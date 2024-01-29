import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useUser } from '../UserContext'
import './header.css'

function Header() {
    const { user } = useUser()

    return (
        <>
            <Navbar className="sticky-top" expand="md" variant="dark" bg="dark">
                <Navbar.Toggle aria-controls="navbar-nav" className="m-3" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto nav-links">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/parts" className="nav-item">View Parts</Link>
                        <Link to="/add-part" className="nav-item">Add a Part</Link>

                        {
                            user ?
                                <Link to="/dashboard" className="nav-item">Dashboard</Link> :
                                <Link to="/create-account" className="nav-item">Account</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
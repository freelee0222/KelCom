import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../UserContext'
import './footer.css'

function Footer() {
    const { user, setUser } = useUser()

    function logout() {
        setUser(null)
        window.location = '/'
    }

    return (
        <footer className="footer fixed-bottom">
            KelCom &copy; 2024
            {user ? <Link onClick={logout}><small className="logoutText">Log Out</small></Link> : null}
        </footer>
    )
}

export default Footer
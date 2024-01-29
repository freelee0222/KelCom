import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../components/UserContext'

const Dashboard = () => {
    const { user } = useUser()

    return (
        <>
            {user ?
                <main className="headerBox">
                    <h1 className="col-md-12 headerBlue">{user.firstName} <span className="headerBlack"> {user.lastName[0]}.</span> {""}</h1>
                    <div className="block col-md-3"></div>
                    <hr />
                    
                    <Link to="/edit-account"><button className="btn btn-danger m-3">Edit Profile</button></Link>
                </main> : null}
        </>
    )
}

export default Dashboard
import React from 'react'
import { useUser } from '../components/UserContext'
import AccountForm from '../components/AccountForm'
import '../styles/form.css'

const EditAccount = () => {
    const { user, setUser  } = useUser()

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="col-md-12 subHeader">You are a member</h2>
                    <h1 className="col-md-12 headerBlue">when <span className="headerBlack">you</span> say you are.</h1>
                    <div className="block col-md-3"></div>
                    <h3 className="col-md-12 paragraphTitle">Don't wait. Become a member today.</h3>
                    <hr className="m-2" />
                </div>
            </div>
            <AccountForm user={user} setUser={setUser}/>
        </>
    )
}

export default EditAccount
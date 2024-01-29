import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../styles/form.css'
import AccountForm from '../components/AccountForm'

const CreateAccount = () => {
    const navigate = useNavigate()
    const [newAcct, setNewAcct] = useState(false)

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="col-md-12 subHeader">Write</h2>
                    <h1 className="col-md-12 headerBlue">stuff <span className="headerBlack">here.</span> ...or not.</h1>
                    <div className="block col-md-3"></div>
                    <h3 className="col-md-12 paragraphTitle">You can put stuff here too.</h3>
                    <hr className="m-2" />
                </div>
            </div>
            {
                !newAcct ?
                    <div className="headerBox boxCenter">
                        <Button variant="success" className="m-3" onClick={() => setNewAcct(true)}>Create Account</Button>
                        <Button variant="success" className="m-3" onClick={() => navigate('/login')}>Log-in</Button>
                    </div> : <AccountForm />
            }
        </>
    )
}

export default CreateAccount
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const AccountForm = ({ user, setUser }) => {
    const navigate = useNavigate()
    const [account, setAccount] = useState({})

    useEffect(() => {
        if (user) {
            setAccount(user)
        }
    }, [])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAccount(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user) {
            editAccount(account)
        } else {
            addAccount(account)
        }
    }

    const addAccount = (account) => {
        const feedback = document.querySelector('.feedback')
        feedback.innerHTML = ""
        axios.post('http://localhost:4000/api/create-account', account)
            .then(response => {
                const { token } = response.data
                const tokens = {
                    accountCreationToken: token,
                  };
                window.localStorage.setItem('api_token', JSON.stringify(tokens))
                navigate('/login')
            })
            .catch(err => {
                feedback.innerHTML += err.response.data.message
            })
    }

    const editAccount = () => {
        axios.put('http://localhost:4000/api/edit-account', account)
            .then(response => {
                setUser(response.data)
                navigate(`/dashboard`)
            })
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control className="my-2" type="text" name="firstName" required={true} value={account.firstName || ""} onChange={handleChange} />
                <Form.Label>Last Name:</Form.Label>
                <Form.Control className="my-2" type="text" name="lastName" required={true} value={account.lastName ? account.lastName : ""} onChange={handleChange} />
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control className="my-2" as="select" name="role" required={true} value={account.role || ""} onChange={handleChange}>
                    <option value="">Select One...</option>
                    <option value="electrician">Electrician</option>
                    <option value="office">Office</option>
                    <option value="mops">Mops</option>
                </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className="my-2" type="text" placeholder="(xxx)xxx-xxxx" name="phone" value={account.phone || ""} onChange={handleChange} />
                <Form.Text className="text-muted">Phone number is not required.</Form.Text>
                <hr />
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control className="my-2" type="email" name="email" required={true} value={account.email || ""} onChange={handleChange} />
                {user ?
                    <Form.Control className="my-2" type="hidden" name="password" required={true} value={account.password || ""} onChange={handleChange} /> :
                    <>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control className="my-2" type="password" name="password" required={true} value={account.password || ""} onChange={handleChange} />
                    </>
                }
            </Form.Group>
            <div className="block col-md-3"></div>
            <p>Have an account? <span><Link to="/login">Login Here.</Link></span></p>
            <h2 className="feedback"></h2>
            <Button variant={user ? "danger" : "success"} type="submit">{user ? "Edit" : "Create Acct."}</Button>
        </Form>
    )
}

export default AccountForm
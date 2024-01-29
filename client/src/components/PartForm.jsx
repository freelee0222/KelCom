import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const PartForm = ({ parts, params }) => {

    const [part, setPart] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPart(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const feedback = document.querySelector('.feedback')
        feedback.innerHTML = ""
        if (parts) {
            editPart(part)
        } else {
            addPart(part)
        }
        navigate( "/parts")
    }

    useEffect(() => {
        let defaults = parts
            ? parts.filter(part => part._id === params.id)[0]
            : {}
        setPart({ ...defaults })
    }, [parts])

    const addPart = (part) => {
        axios.post('http://localhost:4000/api/add-part', part)
    }

    const editPart = (part) => {
        axios.put(`http://localhost:4000/api/update-part/${part._id}`, part)
    }

    function deletePart(e) {
        const id = e.target.dataset.id
        axios.delete(`http://localhost:4000/api/delete-part/${id}`)
         window.location = '/parts'
    }

    return (
        <Form onSubmit={handleSubmit}>
            <br/>
            <Form.Group>
                <Form.Label>Part Name:</Form.Label>
                <Form.Control className="my-2" type="text" name="name" required value={part.name || ""} onChange={handleChange} />
                <Form.Label>Option 1:</Form.Label>
                <Form.Control className="my-2" type="text" name="option1" required value={part.option1 || ""} onChange={handleChange} />
                <Form.Label>Option 2</Form.Label>
                <Form.Control className="my-2" type="number" name="option2" required value={part.option2 || ""} onChange={handleChange} />
                <Form.Label>Description:</Form.Label>
                <Form.Control className="my-2" as="textarea" rows="5" type="text" placeholder="Enter a description..." name="description" required value={part.description || ""} onChange={handleChange} />
            </Form.Group>
            <hr />

            <h4 className="m-3 feedback"></h4>
            <Button variant={parts ? "success" : "warning"} className="m-3" type="submit">{parts ? "Edit" : "Add"}</Button>
            <br/>
            {parts ? <Button variant="danger" className="delete m-3" data-id={part._id} onClick={deletePart}>Delete</Button> : null }
        </Form>
    )
}

export default PartForm
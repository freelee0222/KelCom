import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PartForm from '../components/PartForm'

const EditPart = () => {
    const [parts, setParts] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/api/parts')
        .then(response => setParts(response.data))
    }, [])

    return (
        <>
            <PartForm parts={parts} params={params}/>
            <hr/>
        </>
    )
}

export default EditPart
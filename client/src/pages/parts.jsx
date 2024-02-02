import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PartCard from '../components/PartCard'
import TitleBlock from '../components/TitleBlock'

const Parts = () => {
    const [parts, setParts] = useState([])


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            axios.get('http://localhost:4000/api/parts')
                .then(response => setParts(response.data))
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
            <TitleBlock subTitle={"Parts"} titleStart={"Write"} titleMid={"Stuff"} titleEnd={"Here"} titleFill={"Write more stuff here if you want to."} />
            {
                parts.length > 0 ? parts.map((part, id) => (
                    <PartCard key={id} part={part} />
                )) :
                    <>
                        <h2 className="mx-5">loading...</h2>
                    </>
            }
            <hr />
        </>
    )
}

export default Parts
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import TitleBlock from '../components/TitleBlock'

const Home = () => {
    return (
        <>
            <TitleBlock subTitle={"Beta"} titleStart={"KelCom"} titleMid={"SmoothOpp"} titleFill={"Write stuff here."} />
            <main className="headerBox">
                    <Link to="/create-account" className="home-link">Account</Link><br/>
                    <Link to="/parts" className="home-link">View Parts</Link><br/>
                    <Link to="/add-part" className="home-link">Add a Part</Link><br/>

                    <hr/>
                <small className="float-right m-3"><u>Have an account? Log in here.</u></small>
                <Link to="/login"><button className="btn btn-success m-2">Login</button></Link>
            </main>
        </>)
}

export default Home
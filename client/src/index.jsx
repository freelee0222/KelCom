import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import UserContext from './components/UserContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/home"

import Login from './pages/login'
import Dashboard from './pages/dashboard'
import CreateAccount from './pages/create-account'
import EditAccount from './pages/edit-account'

import Parts from './pages/parts'
import AddPart from './pages/add-part'
import EditPart from './pages/edit-part'

import NotFound from './pages/not-found'

const App = () => {
    return (
        <UserContext>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/parts" element={<Parts />} />
                    <Route path="/add-part" element={<AddPart />} />
                    <Route path="/edit-part/:id" element={<EditPart />} />

                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/edit-account" element={<EditAccount />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </UserContext>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
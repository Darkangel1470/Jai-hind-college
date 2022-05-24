import React from "react";
import Main from './pages/Main'
import Contact from './pages/Contact'
import Navbar from "./component/navbar/Navbar"
import { Routes, Route } from "react-router-dom";

// css imports
import './component/styles/App.css'
function App() {
    return (
        <div>
            <Navbar />
            <Routes> 
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App;
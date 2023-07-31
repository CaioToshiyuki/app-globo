import Home from './Home.jsx';
import Login from './Login.jsx';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element= { <Home/> } />
            <Route path="/Login" element= { <Login/> } />
        </Routes>
    </main>
)

export default content
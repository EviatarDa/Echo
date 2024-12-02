import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SoundBoard from './components/SoundBoard';
import Editor from './components/Editor';
import Settings from './components/Settings';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/soundboard" element={<SoundBoard />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;

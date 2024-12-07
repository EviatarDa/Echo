import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recorder from './pages/Recorder';
import Instruments from './pages/Instruments';
// import Editor from './pages/Editor';
// import Settings from './pages/Settings';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/instruments" element={<Instruments />} />
                <Route path="/recorder" element={<Recorder  />} />
                {/* <Route path="/editor" element={<Editor />} /> */}
                {/* <Route path="/settings" element={<Settings />} /> */}
            </Routes>
        </Router>
    );
}

export default App;

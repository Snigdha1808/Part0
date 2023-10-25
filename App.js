import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Arts from "./components/Arts";
import Login from "./components/Login";
import './Navbar.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Use <Routes> to wrap your route configurations */}
        <Routes>
          {/* Define your routes using <Route> inside <Routes> */}
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

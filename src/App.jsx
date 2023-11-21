import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import login from "./components/login";
import Footer from "./components/Footer";
const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="courses">
            <Courses />
          </div>

          <div id="reviews">
            <Reviews />
          </div>

          <div id="contact">
            <Contact />
          </div>
          <div id={login}>
            <login/>
            <button onClick={()=> navigate('login')}>
              login
            </button>
          </div>
        </main>

        <Footer/>
      </div>
    </Router>
    
  );
};

export default App;

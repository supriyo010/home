import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";
import "./about.css";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="About" title2="Us?" />
        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4" className="png1"/>
        <h1 className= "animate-pulse">WEB:-SUPRIYO MAJI </h1>
        </p>
        
          <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4" className="png1" />
          *App Architect:* @~Shreya Mukherjee 

        </p>
        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4" className="png1" />
           **Insight Illuminator: ** @~🦹🏻‍♀️ 

          
        </p>
        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4" className="png1" />
        
        4. *Social Maven:* @Sabir Csd 

          
        </p>
        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4" className="png1" />
        5. *Founder & Mentor* @me
          
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;

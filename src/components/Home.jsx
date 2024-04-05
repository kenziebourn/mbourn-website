import React from 'react';
import "../index.css";
import HeroImage from "../assets/heroImage.png"
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from "typewriter-effect";  //type writer effect :D // 
import { Link } from "react-scroll";

// LANDING PAGE //

const Home = () => {
  return (
    <div name="home" className="h-screen w-full text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-6xl sm:text-7xl font-bold">
                     Hi,I'm McKenzie </h2>
                <p className="py-4 max-w-md">
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter  
                    .typeString("I am a student, creator and tech enthusiast")
                    .start();
                    }}
                    />
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} 
                    className="group text-white w-fit px-6 py-3 my-2
                    flex items-center border-white border-solid border-2 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <BsArrowRight size={15}
                            className="ml-1" />
                        </span>
                    </Link>
                </div>
                <p className="text-xs mt-3">Check out my blog <a href="https://blogs.oregonstate.edu/bournm/2023/09/27/why-computer-science/" target="_blank" rel="noopener noreferrer"> <u>here!</u></a></p>
            </div>
            <div> 
                <img src={HeroImage} alt="my profile" className="shadow-md object-scale-down h-100 w-60 rounded-full duration-300 hover:scale-105 hidden md:block" 
                style={{ marginLeft: '100px', boxShadow: '0px 0px 30px 0px yellow' }}/>
            </div>
        </div>
    </div>
  )
}

export default Home;
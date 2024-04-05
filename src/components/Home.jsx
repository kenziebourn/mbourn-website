import React from 'react';
import "../index.css";
import memoji_nobg from "../assets/memoji_nobg.png";
import Typewriter from "typewriter-effect";  //type writer effect :D // 
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsPaperclip} from "react-icons/bs";

// LANDING PAGE //

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
    <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-col justify-center items-center h-full"> 
                    <img src={memoji_nobg} alt="my profile" className="border-4 border-purple1 object-scale-down h-100 w-60 rounded-full" />
                    <h1 className="py-2 text-6xl sm:text-7xl font-bold">
                        Hi, I'm McKenzie.</h1>
                    <h2 className=" text-xl max-w-md font-semibold text-purple1 ">
                        <Typewriter
                            onInit={(typewriter)=> {
                            typewriter  
                            .typeString("I am a student, creator and tech enthusiast.")
                            .start();
                            }}
                            />
                    </h2>
                    <div className="py-4 flex space-x-4">
                        <a href="https://github.com/kenziebourn" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="hover:text-purple1"/>
                        </a>
                        <a href="https://www.linkedin.com/in/mckenzie-bourn/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="hover:text-purple1"/>
                        </a>
                        <a href="mailto:bournm@oregonstate.edu">
                            <HiOutlineMail size={30} className="hover:text-purple1"/>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <BsPaperclip size={30} className="hover:text-purple1"/>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Home;
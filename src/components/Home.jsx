import React from 'react';
//import HeroImage from "../assets/heroImage.png";//
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
                    flex items-center rounded-md bg-black border-solid cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <BsArrowRight size={15}
                            className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

            {/*<div> THIS IS THE LANDING PROFILE IMAGE
                <img src={HeroImage} alt="my profile" className="object-scale-down h-100 w-60 rounded-2xl" />
                </div>*/}
        </div>
    </div>
  )
}

export default Home
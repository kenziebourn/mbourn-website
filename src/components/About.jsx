import React from "react";
import profile2 from "../assets/profile2.jpg";

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className="mt-[-1] w-full h-screen text-white flex">
      <div className="flex items-center justify-center w-1/3">
        <img src={profile2} alt="Profile" className="object-scale-down h-100 w-60" />
      </div>
      <div className="max-w-screen-lg p-4 mx-auto w-2/3">
        <div className="pb-0">
          <p className="text-6xl text-center border-b-4 border-black">
            ABOUT ME
          </p>
        </div>
        
        <p className="text-xl text-center mt-20 ml-5 mr-8">
          My name is McKenzie Bourn. I am currently a third-year computer science student at Oregon State University 
          who loves to explore cutting-edge technologies that shape our world. As I work towards my degree, 
          I am seeking internship opportunities in frontend, backend or full-stack development. I am eager to contribute my knowledge 
          and creativity to real-world projects in order to grow as a technical professional.
        </p>

        <br />

        <p className="text-xl text-center ml-5 mr-5">
        Beyond work, you'll often find me on the tennis court, playing Billiards, or cooking
        various Asian cuisines. But that's not all—I have a passion for travel and exploration. In March 2023, I embarked 
        on my first solo trip to Mexico, embracing new experiences and immersing myself in diverse cultures.
        To me, life is an adventure, and I'm always up for a challenge.
        </p>
      </div>
    </div>
  );
};

export default About;
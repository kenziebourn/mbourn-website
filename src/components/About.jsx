import React from "react";
import profile2 from "../assets/profile2.jpg";

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className="mt-[-1] w-full h-screen text-white flex">
      <div className="w-1/3">
        <img src={profile2} alt="Profile" className="h-full w-full" />
      </div>
      <div className="max-w-screen-lg p-4 mx-auto w-2/3">
        <div className="pb-0">
          <p className="text-6xl text-center border-b-4 border-black">
            ABOUT ME
          </p>
        </div>
        
        <p className="text-xl text-center mt-10 ml-5 mr-5">
          My name is McKenzie Bourn. I am currently a third-year computer science student at Oregon State University 
          who loves to explore cutting-edge technologies that shape our world. As I work towards my degree, 
          I am seeking internship opportunities in frontend, backend or full-stack development. I am eager to contribute my knowledge 
          and creativity to real-world projects in order to grow as a technical professional.
        </p>

        <br />

        <p className="text-xl text-center ml-5 mr-5">
          Outside my work, you can find me playing billiards, sewing, spending time
          with friends and staying active through activities such as hiking and running.
          I love to travel and try new things, as it gives me a chance to see different perspectives and cultures. 
          I believe that life is an adventure, and I'm always up for a challenge.
        </p>
      </div>
    </div>
  );
};

export default About;

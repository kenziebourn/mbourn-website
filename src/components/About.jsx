import React from "react";
// ABOUT ME SECTION //
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-6xl font-bold inline border-b-4 border-black">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is McKenzie Bourn. I am currently a third-year computer science student at Oregon State University 
        with an interest in emerging technologies such as automotive and 
        cloud computing. As I work towards my degree, I am seeking internship 
        opportunities in front end development or software engineering to gain practical 
        experience and further develop my skills. I am constantly seeking 
        opportunities to learn and grow as a technical professional, 
        and I am eager to contribute my knowledge and creativity to real-world projects.
        </p>

        <br />

        <p className="text-xl">
          Outside my work, you can find me playing billiards, sewing, spending time
          with friends and staying active through activities such as hiking and lifting.
            I also enjoy exploring new places and trying new things, as it allows me 
          to broaden my horizons and learn more about the world around me. 
        </p>
      </div>
    </div>
  );
};

export default About;
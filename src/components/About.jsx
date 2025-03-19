import React from "react";
import "../index.css";
// import profile2 from "../assets/profile2.jpg";

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className=" w-full min-h-screen flex">
      <div className="max-w-screen-lg p-14">
        <h1 className="text-6xl font-bold">
          <span id="McKenzie">About Me</span>
        </h1>

        <p className="pt-4 text-xl leading-8">
        Born in China and raised in Colorado Springs, I’ve always been interested in computers ever since games were all but Solitaire and Minesweeper.
        I recently completed my bachelors in Computer Science at Oregon State University and am working as a Site Reliability Engineer I at Medallia.
        <br></br>Beyond work, you’ll find me playing Billiards, making jewelry, running or cooking various Chinese dishes. 
        </p>
        <a href="https://blogs.oregonstate.edu/bournm/" target="_blank">
          <button className="text-purple3 bg-purple1 px-6 py-3 my-8 border-2 border-purple3 flex rounded-full"
          >My Blog</button>
        </a>
      </div>
    </div>
  );
};

export default About;
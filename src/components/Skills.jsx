import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import graphql from "../assets/graphql.png";
import docker from "../assets/docker.png";

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: python,
          title: "Python",
          style: "shadow-blue-500",
        },
        {
          id: 2,
          src: github,
          title: "Github",
          style: "shadow-white",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 5,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
            id: 6,
            src: reactImage,
            title: "ReactJS",
            style: "shadow-cyan-500",
          },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-cyan-500",
        },
        {
            id: 8,
            src: nodejs,
            title: "Node.js",
            style: "shadow-green-500",
        },
        {
            id: 9,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-500",
        },
        {
            id: 10,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-500",
        },
        {
          id: 11,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-500",
        },
        {
          id: 12,
          src: docker,
          title: "Docker",
          style: "shadow-blue-500",
        }
      ];
    
      return (
        <div
          name="experience"
          className="w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center mt-[200px] w-full h-full text-white">
            <div>
              <p className="text-6xl border-b-4 border-black p-2 inline">
                EXPERIENCE
              </p>
              <p className="py-6 text-xl">TECHNOLOGIES I'VE WORKED WITH</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center text-white py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`bg-black shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Skills;
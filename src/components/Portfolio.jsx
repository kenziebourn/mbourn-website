import React from 'react';
import matchiq from '../assets/portfolio/matchiq.png';
import jiaai from '../assets/portfolio/jiaai.png';
import pearllabs from '../assets/portfolio/pearllabs.png';
import mancala from '../assets/portfolio/mancala.png';
import valet from '../assets/portfolio/valet.png';
import exercisetrack from '../assets/portfolio/exercisetrack.png';
import "../index.css";

// PROJECTS SECTION //

const Portfolio = () => {
    // array for displaying projects //
    const portfolios = [
      {
        id: 1,
        src: matchiq,
        href: '',
      },
      {
        id: 2,
        src: jiaai,
        href: 'https://github.com/kenziebourn/Song-Recommender',
      },
      {
        id: 3,
        src: pearllabs,
        href: 'https://github.com/kenziebourn/PearlLabs',
      },
      {
        id: 4,
        src: exercisetrack,
        href:'https://github.com/kenziebourn/Exercise-Tracker/tree/master',

      },
      {
        id: 5,
        src: valet,
        href: 'https://github.com/kenziebourn/ValetProgram',
      },
      {
        id: 6,
        src: mancala,
        href:'https://github.com/kenziebourn/Mancala-Game'
      },
    ];
  
    return (
      <div
        name="portfolio"
        className="w-full min-h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="text-6xl S inline font-bold">
              <span id="McKenzie">Projects</span>
            </h1>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, href }) => (
              <div key={id} className="rounded-lg outline: 2px solid bg-white">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <img
                    href = {href}
                    src={src}
                    alt=""
                    className="rounded-t hover:opacity-30 transition duration-300 ease-in-out"
            /* Alternative hover: make project image fade, changes opacity=> hover:opacity-30 transition duration-300 ease-in-out bg-green-800 */
                    />
                </a>
                { id === 1 && (
                  <div className="text-center mt-2">
                    <p className="text-black font-bold">MatchIQ: Job Hunting AI-Tool</p>
                    <p className="text-sm text-gray-500">#node.js #mongoDB #django #react.js #docker</p>
                  </div>
                )}
                { id === 2 && (
                  <div className="text-center mt-2">
                    <p className="text-black font-bold">Song Recommendation App</p>
                    <p className="text-sm text-gray-500">#node.js  #mongoDB  #react.js </p>
                  </div>
                )}
                { id === 3 && (
                  <div className="text-center mt-2">
                    <p className="text-black font-bold">Boba Shop Database</p>
                    <p className="text-sm text-gray-500">#node.js #mySQL #html/css</p>
                  </div>
                )}
                { id === 4 && (
                  <div className="text-center mt-2">
                    <p className="text-black font-bold">Exercise Tracker</p>
                    <p className="text-sm text-gray-500">#node.js  #mongoDB  #react.js </p>
                  </div>
                )}
                { id === 5 && (
                  <div className="text-center mt-2">
                    <p className="text-black font-bold">Valet Program</p>
                    <p className="text-sm text-gray-500">#python</p>
                  </div>
                )}
                { id === 6 && (
                  <div className="text-center mt-2">
                    <p className="text-black font-bold">Mancala Game</p>
                    <p className="text-sm text-gray-500">#python</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 850px) {
          .max-w-screen-lg {
            margin-top: 9rem;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default Portfolio;
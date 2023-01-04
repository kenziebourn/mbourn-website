import React from 'react';
import mancala from '../assets/portfolio/mancala.png';
import ecommerce from '../assets/portfolio/ecommerce.png';
import valet from '../assets/portfolio/valet.png';


// PROJECTS SECTION //

const Portfolio = () => {
    // array for displaying projects //
    const portfolios = [
      {
        id: 1,
        src: mancala,
        href: 'https://github.com/kenziebourn/Mancala-Game',
      },
      {
        id: 2,
        src: valet,
        href: 'https://github.com/kenziebourn/ValetProgram',
      },
      {
        id: 3,
        src: ecommerce,
        href:'https://jiathelabel.pages.dev/',
      },
    ];
  
    return (
      <div
        name="portfolio"
        className="w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center mt-[-20] w-full h-full">
          <div className="pb-8">
            <p className="text-6xl font-bold inline border-b-4 border-black">
              Portfolio
            </p>
            <p className="mt-5 text-xl">
              Projects I've worked on
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, href }) => (
              <div key={id} className="shadow-md shadow-white rounded-lg">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <img
                    href = {href}
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
            /* Alternative hover: make project image fade, changes opacity=> hover:opacity-30 transition duration-300 ease-in-out bg-green-800 */
                    />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
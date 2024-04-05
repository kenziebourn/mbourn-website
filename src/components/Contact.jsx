import React from 'react'
import "../index.css";

const Contact = () => {
    return (
      <div
        name="contact"
        className="w-full min-h-screen p-4 text-bold"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <h1 className="text-6xl font-bold inline">
              Connect
            </h1>
          </div>
  
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/1d447c43-4269-4512-9e4a-1b3cd2c71d8a"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 bg-transparent border-2 text-white focus:outline-none"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="my-4 p-2 bg-transparent border-2 text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="10"
                className="p-2 bg-transparent border-2 text-white focus:outline-none"
                required
              ></textarea>
  
              <button className="text-black bg-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
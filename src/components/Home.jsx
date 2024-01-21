import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div name="home" className="h-screen w-full bg-[#0a192f] text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className='App'>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontSize:"40px", fontWeight: 'normal' }}>
              I am Mern Stack Developer{' '}<br></br>
              <span style={{  fontWeight: 'bold' }}>
                <Typewriter
                  words={['Bcakend', 'Frontend', 'Responsive', 'Complete Functional!']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience in web development.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js, and MongoDB.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://thumbs.dreamstime.com/z/application-developer-working-computer-office-software-developer-sitting-front-computer-working-office-smiling-117182037.jpg"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-[]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

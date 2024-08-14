import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();
    const resumeUrl = "./image/Amisha.pdf";

    // Trigger a download
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = "Amisha.pdf"; // Ensure the download attribute is set
    a.target = '_blank'; // Open the URL in a new tab
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div name="home" className='w-full pt-12 sm:h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row sm:mx-12 md:mx-auto'>
      <div className='flex flex-col justify-center h-full pt-10 sm:pr-8'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white transition-all duration-500 transform hover:scale-110 '>
         <h2 className= 'whitespace-nowrap'>I'm a Full Stack</h2>  <h2 className='whitespace-nowrap'>Web Developer</h2>
        </h2>
        <p className='text-gray-600 py-4 max-w-md leading-relaxed tracking-wide'>
          Creative thinker to achieve modern business requirements using technical solutions.
          Ability to develop production-ready code using HTML, CSS, JavaScript, Node.js, React.js, Next.js,
          Redux, Tailwind, MongoDB, Mongo Atlas, and Express.js with expressive user experience.
        </p>
  
        <div>
          <button
            onClick={handleResumeClick}
            className='font-bold text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer'
          >
            Resume
            <span className='group-hover:rotate-90 duration-300 ml-2'>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className='mt-8 sm:mt-0'>
        <img src="./image/amishaPic.jpg" alt="my profile" className='rounded-2xl mx-auto w-3/2 sm:w-2/3 md:w-3/4 lg:w-3/5'/>
      </div>
    </div>
  </div>
  
  );
}

export default Home;

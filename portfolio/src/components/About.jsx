import React from 'react'

const About = () => {
  return (
    <div name="about"
     className='w-full sm:h-screen bg-gradient-to-b py-[15%] bg-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='sm:mt-0'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
            </div>
            
       
        
        <p className='text-xl mt-10'>
         I'm Amisha Kumari, a creative and driven individual from Gaya, Bihar.
         I'm currently pursuing my Bachelor's of Technology in Computer Science from Netaji Subhash Engineering College, Kolkata.
          I’ve  built various projects that highlight my passion for coding 
          and problem-solving. I’m dedicated to continuous learning, always exploring new technologies 
          and online courses to stay ahead. I enjoy connecting with others in the tech community, whether 
          discussing the latest web development trends or sharing insights on coding projects. Let’s connect
           and explore the exciting world of technology together! 
        </p>
        </div>
    </div>
  )
}

export default About;
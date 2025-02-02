import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, elem, hover = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        backgroundColor: hover ? "#7443FF" : "",
      }}
      className={`${width} bg-zinc-800 rounded-xl px-5 flex flex-col justify-between py-8`}
    >
      <motion.div 
        className='w-full'
        animate={{ 
          paddingLeft: isHovered ? "20px" : "0px",
    paddingRight: isHovered ? "20px" : "0px"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className='flex justify-between items-center'>
          <h4>{elem.heading1}</h4>
          <IoIosArrowRoundForward className='text-xl'/>
        </div>
        <h1 className='text-3xl font-medium w-72 mt-8'>{elem.heading2}</h1>
      </motion.div>
      
      <div className="down w-full">
        {elem.heading3 && (
          <h1 className='text-8xl font-medium mt-25 leading-none tracking-tight'>
            Start a Project
          </h1>
        )}
        
        {elem.button && (
          <button className='px-5 py-2 mt-6 rounded-full border-[1px] border-zinc-300'>
            Contact Us
          </button>
        )}
        
        {elem.paragraph && (
          <p className='text-sm text-zinc-500 font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
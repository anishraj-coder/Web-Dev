import React from 'react'
import { motion } from "motion/react"
import { IoIosReturnRight } from "react-icons/io";

function Button({text}) {
  return (
    <button className='bg-[#FAF5FF] min-w-40 text-black font-satoshi font-light text-sm  flex items-center justify-between px-3 py-2 rounded-full'>
        <span className='font-medium'>{text ||'Go Back'}</span>
        <IoIosReturnRight className='text-xl' />
    </button>
  )
}

export default Button
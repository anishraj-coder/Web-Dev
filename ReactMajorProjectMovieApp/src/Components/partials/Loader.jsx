import React from 'react'

function Loader() {
  return (
    <div className='h-[80%] w-full bg-black flex items-center justify-center'>
        <img className='h-[50%]' src='/loader.gif' alt="" />
    </div>
  )
}

export default Loader
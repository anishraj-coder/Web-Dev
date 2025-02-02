import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

function Work() {
  const { scrollYProgress } = useScroll()
scrollYProgress.on("change",data=>{
  function showImage(number){
    setImages(prev=>(
      prev.map((img,idx)=>{
        if(idx <=number) return {...img,isActive:true};
        else return {...img,isActive:false};
      })
    ))
    
  }
  switch(Math.floor(data*100)){
    case 0:
      showImage(-1);
      break;
    case 2:
      showImage(0);
      break;
    case 5:
      showImage(1);
      break;
    case 7:
      showImage(2);
      break;
    case 9:
      showImage(3);
      break;
    case 12:
      showImage(4);
      break;
    case 13:
      showImage(5);
      break;    
    
    
  }
  
});

    const [images,setImages]=useState([
      {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"50%",left:'50%', isActive: false},
      {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top:'53%',left:'48%', isActive: false},
      {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top:"45%",left:'53%', isActive: false},
      {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top:'50%',left:'50%', isActive: false},
      {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:'55%',left:'57%', isActive: false},
      {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top:'57%',left:'52%', isActive: false},
  ]);
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto ">
            <h1 className='leading-none font-medium text-center select-none text-[37vw] mb-20'>work</h1>
            {images.map((image,idx)=>(image.isActive&&<img className='w-60 absolute rounded-lg -translate-x-1/2 -translate-y-1/2' key={idx} style={{top:`${image.top}`,left:`${image.left}`}} src={image.url} alt="" />))}
        </div>
        
    </div>
  )
}

export default Work
import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react';

function Products() {
    const data=[
        {name: "Arqitel",description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',live:true,case:false,color: '#0B0468', src:"https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"},
        {name: "Cula",description:'We immersed ourselves in a 3D world we created to explain how Cula\'s platform collects data from carbon removal processes and converts them into carbon credit certificates.',live:true,case:false,color: '#42536C',src:'https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4'},
        {name: "TTR",description:'We\'ve created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.',live:true,case:false,color:'#25B567',src:"https://web.archive.org/web/20240216094731im_/https://cdn.refokus.com/website/Maniv-Compressed.mp4"},
        {name: "Yahoo!",description:'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',live:true,case:true, color:'#161618',src:'https://web.archive.org/web/20240216094843im_/https://cdn.refokus.com/website/2022/videos/yahoo.webm'},

    ];
    const [pos,setPos]=useState(0);
    const mover=(point)=>{   
      console.log(point)   ;
      setPos(point*20);
    }
    
  return (
    <div className='mt-10  relative'>
        {data.map((p,idx)=><Product mover={mover} index={idx} key={idx} data={p}/>)}
        <div className='absolute top-0 h-full w-full pointer-events-none'>
          <motion.div initial={{y:pos}} animate={{y:pos+`rem`}} transition={{ease:[0.45, 0, 0.55, 1],duration: 0.6}}  className='absolute h-[20rem] w-[32rem] -translate-x-1/2 rounded-xl left-[40%] bg-red-300 overflow-hidden'>
            {data.map((item,idx)=>(<motion.div key={idx} animate={{y:-pos+`rem`}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.2 }} className='h-full w-full bg-blue-500'><video className='w-full object-contain' src={item.src}></video></motion.div>))}
          </motion.div>
        </div>
    </div>
  )
}

export default Products 
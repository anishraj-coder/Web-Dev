import React from 'react'
import Product from './Product'

function Products() {
    const data=[
        {name: "Arqitel",description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',live:true,case:false,color: '#0B0468'},
        {name: "Cula",description:'We immersed ourselves in a 3D world we created to explain how Cula\'s platform collects data from carbon removal processes and converts them into carbon credit certificates.',live:true,case:false,color: '#42536C'},,
        {name: "TTR",description:'We\'ve created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.',live:true,case:false,color:'#25B567'},
        {name: "Yahoo!",description:'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',live:true,case:true, color:'#161618'},

    ];
  return (
    <div className='mt-10  relative'>
        {data.map((p,idx)=><Product key={idx} data={p}/>)}
        <div className='absolute top-0 h-full w-full pointer-events-none'>
          <div className='absolute h-[15rem] w-[23rem] -translate-x-1/2 left-[45%] bg-red-300 overflow-hidden'>
            <div className='h-full w-full bg-blue-200'></div>
            <div className='h-full w-full bg-blue-300'></div>
            <div className='h-full w-full bg-blue-400'></div>
            <div className='h-full w-full bg-blue-500'></div>
          </div>
        </div>
    </div>
  )
}

export default Products
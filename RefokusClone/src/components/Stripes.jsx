import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data=[
        {image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",value:52},
        {image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",value:2},
        {image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",value:12},
        {image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",value:52},
        {image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",value:2},

    ];
  return (
    <div className='flex items-center w-full '>
        {data.map((d,idx)=><Stripe key={idx} value={d}/>)}
    </div>
  )
}

export default Stripes
import React from 'react'
import { nanoid } from 'nanoid'
import { ImGift } from 'react-icons/im'
function Marquee({data}) {
  return (
    <div className='flex gap-15 overflow-hidden flex-nowrap py-5'>
        {data.map(item=>{
            return(
                <img className='shrink-0 w-32' key={nanoid()} src={item} alt="" />
            )
        })}
    </div>
  )
}

export default Marquee
import React from 'react'

function Stripe({value}) {
  return (
    <div  className='px-4 py-6 shrink w-1/5 border-zinc-600 border-b-[1.2px] border-r-[1.2px] border-t-[1.2px] flex justify-between'>
       <img src={value.image} alt="" />
        <h4 className='font-satoshi font-semibold'>{value.value}</h4>
    </div>
  )
}

export default Stripe
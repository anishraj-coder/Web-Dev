import React from 'react'
import Card from './Card'

function Cards() {
    const elem=[
        {heading1:"Up Next:News", heading2:'Insights and behind the scenes', heading3:false, button:false, paragraph: true},
        {heading1:"Get in touch",heading2: 'Let\'s get to it, Together.',heading3:true, button:true, paragraph:false}
    ];
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto py-15 flex gap-2 font-satoshi'>
            <Card elem={elem[0]} width={'basis-1/3'}/>    
            <Card elem={elem[1]}  hover={true} width={'basis-2/3'}/>    
        </div>        
    </div>
  )
}

export default Cards
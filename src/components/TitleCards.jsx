import React from 'react'
import cards_data from '../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='mt-5 mb-5'>
      <h2 >Popular on Netflix</h2>
      <div className='flex gap-4'>
        {
          cards_data.map((card,index)=>{
           return <div key={index} className=''>
              <img className='rounded cursor-pointer relative' src={card.image} alt="" />
              <p className='absolute bottom'>{card.name}</p>
            </div>

            
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
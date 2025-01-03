import React from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/hero_banner.jpg'
import caption from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'


const Home = () => {
  return (
    <div >
        <Navbar/>
        <div className='relative '>
          <img src={hero} className='w-full' alt="" />
          <div className='absolute  p-8 bottom-0'>
            <img src={caption} alt="" />
            <div className='flex gap-4 mt-5'>
            <button className='bg-white text-black flex items-center h-10 p-4 gap-1 rounded text-lg font-medium'><img className='w-[25px]' src={play_icon} alt="" />Play</button>
            <button className='bg-gray-500 text-white flex items-center h-10 p-4 px-8 gap-1 rounded text-lg font-medium'><img className='w-[25px] ' src={info_icon} alt="" />More</button>
          </div>
          <TitleCards/>
          </div>
        


        </div>
        
    </div>
  )
}

export default Home
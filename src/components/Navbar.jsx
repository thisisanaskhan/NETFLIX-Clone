import React from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_img from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between mt-5 max-w-[1500px] m-auto '>
        <div className='flex gap-x-16 justify-center items-center '>
            <img className='w-36' src={logo} alt="" />
            <ul className='flex gap-x-6 '>
                <li>Home</li>
                <li>TV Show</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className='flex items-center gap-6 '>
            <img className='w-5' src={search_icon} alt="" />
            <p>Children</p>
            <img className='w-5' src={bell_icon} alt="" />
            <div className='flex gap-2 group relative'>
                <img className='w-8' src={profile_img} alt="" />
                <img src={caret_icon} alt="" />
                <div className='hidden group-hover:block absolute top-100% right-0 max-w-max pt-12 w-24   underline'>
                    <p className='border text-base cursor-pointer p-2 '>sign out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
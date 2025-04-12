import React from 'react'
import desktophome from '../assets/home/background-home-desktop.jpg';
import logo from '../assets/shared/logo.svg'

const Navbar = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <img src={desktophome} alt="desktop-home" className='absolute inset-0 w-full h-full object-cover z-0' />
            <img src={logo} alt="" className='absolute top-16 ml-[66px] z-10' />
            <nav className='text-white absolute right-0 z-10 w-[736px] mt-[42px] pl-[158px] backdrop-blur-2xl'>
                <ul className='flex font-semibold justify-evenly'>
                    <li className='py-[38px] hover:border-b-2 border-white'>HOME</li>
                    <li className='py-[38px] hover:border-b-2 border-white'>DESTINATION</li>
                    <li className='py-[38px] hover:border-b-2 border-white'>CREW</li>
                    <li className='py-[38px] hover:border-b-2 border-white'>TECHNOLOGY</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp}from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {

 const [nav,setnav]=useState(false)
  
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
       <div  className='flex items-center '>
       <div className='cursor-pointer'>
            <AiOutlineMenu size={30} onClick={()=>{setnav(!nav)}}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span> </h1>
        <div className='hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2 '>Pickup</p>
        </div>
       </div>

       <div className='bg-gray-200 rounded-full flex item-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
      <AiOutlineSearch size={20} className='flex items-center mt-[11px]'/>
      <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='search food' />
       </div>
       <button className=' bg-black text-white hidden md:flex item-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/>Cart
       </button>
       {nav?      <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}

    <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
      <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>{setnav(!nav)}}/>
      <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span> </h2>
      <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
          <li className='text-xl py-4 flex item-center'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
          <li className='text-xl py-4 flex item-center'><MdFavorite size={25} className='mr-4'/>Favorites</li>
          <li className='text-xl py-4 flex item-center'><FaWallet size={25} className='mr-4'/>Wallet</li>
          <li className='text-xl py-4 flex item-center'><MdHelp size={25} className='mr-4'/>Help</li>
          <li className='text-xl py-4 flex item-center'><AiFillTag size={25} className='mr-4'/>Promotions</li>
          <li className='text-xl py-4 flex item-center'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
          <li className='text-xl py-4 flex item-center'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
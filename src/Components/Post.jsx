import React from 'react'
import Pfp_1 from '../assets/Pfp_1.jpg'
import Post1 from '../assets/Post1.jpg'
import Like from './Like'
import Comment from './Comment'
import Share from './Share'

const Post = () => {
  return (

    <>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    `}
      </style>
      <div className='flex justify-center '>
        <div className='w-[48vw] bg-white mb-8 rounded-3xl pb-5 hover:bg-indigo-100 shadow-2xl transform hover:scale-105  duration-300'>
          <div className='flex mt-5  pl-[2vw] pr-[2vw]'>
            <img src={Pfp_1} alt="" className='h-12 w-12 rounded-full object-cover ' />
            <div className='flex flex-col ml-3'>
            <div className='pop text-xl font-semibold'>Alex Braven</div>
            <div className='pop'>Hi just wanted to share that I have finally got my dream car .Keep working hard guys DREAMS DO COME TRUE!!</div>
            </div>
          </div>
          <div className='flex flex-col items-center mt-5 mb-5'>
            <img src={Post1} alt="" className='w-[44vw] rounded-4xl'/>
          </div>
          <div className='flex justify-between w-[40vw] m-auto'>
            <div className='flex '>
            <button className='cursor-pointer'><Like/></button>
            <div className='ml-1 text-base mt-[1px] font-semibold'>104</div>
            </div>
            <div className='flex'>
            <button className='cursor-pointer'><Comment/></button>
            <div className='ml-1 text-base mb-[5px] font-semibold'>23</div>
            </div>
            <button><Share/></button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Post
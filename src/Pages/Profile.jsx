import React from 'react'
import Navbar from '../Components/Navbar'
import Pfp_1 from '../assets/Pfp_1.jpg'
import Post1 from '../assets/Post1.jpg'
import Post2 from '../assets/Post2.jpg'
import Post3 from '../assets/Post3.jpg'
import Post4 from '../assets/Post4.jpg'
import Grid_Logo from '../assets/Grid_Logo'
import Chat_Logo from '../assets/Chat_Logo'
import Menu_Logo from '../assets/Menu_Logo'

const Profile = () => {
  return (
    <>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    `}
      </style>
      <div className='flex'>
        <Navbar />
        <div className='pl-30 w-[100%] h-[100%] bg-gray-100 pb-10'>
          <div className='pop text-5xl font-bold mb-5 pop'>Profile</div>
          <div className='absolute right-25 top-20'>
          <button className='cursor-pointer shadow-2xl hover:scale-105 hover:shadow-indigo-500 transform duration-300 rounded-full'><Menu_Logo/></button>
          </div>
          <div className='flex mt-10 '>
            <img src={Pfp_1} alt="" className='rounded-full h-40 w-40 object-cover' />
            <div >
              <div className='text-4xl ml-5 font-semibold pop mt-2'>
                Alex_Braven1134
              </div>
              <div className=' ml-5 text-xl mt-2 pop'>
                Alex Braven
              </div>
              <div className='ml-5 text-xl pop mt-2'>
                Let the waves lead the way
              </div>
              <div className='flex gap-10 ml-5 mt-10 pop'>
                <div className='flex'>
                  <div className='text-xl font-semibold'>4</div><span className='pop text-xl font-normal ml-2'>Vibes</span>
                </div>
                <div className='flex'>
                  <div className='text-xl font-semibold'>10</div><span className='pop text-xl font-normal ml-2'>Followers</span>
                </div>
                <div className='flex'>
                  <div className='text-xl font-semibold'>50</div><span className='pop text-xl font-normal ml-2'>Following</span>
                </div>
              </div>
              <div className='flex'>
              <div>
                <button className='text-normal text-white bg-indigo-700 rounded-2xl font-semibold pop w-60 h-12 ml-4 transform hover:scale-105 duration-300 hover:bg-indigo-600 mt-2'>Edit profile</button>
              </div>
               <div>
                <button className='text-normal text-white bg-indigo-700 rounded-2xl font-semibold pop w-60 h-12 ml-4 transform hover:scale-105 duration-300 hover:bg-indigo-600 mt-2'>Adjust preferences</button>
              </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center mt-10  '>
            <div className='flex items-center gap-3'>
            <Grid_Logo />
            <div className='mb-[5px] border-l-gray-300 border-l-3 pl-2'>
              <Chat_Logo/>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-[5px] justify-center mt-4  '>
              <img src={Post1} alt="" className='w-[300px] h-[300px] object-cover transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-indigo-500' />
              <img src={Post2} alt="" className='w-[300px] h-[300px] object-cover transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-indigo-500' />
              <img src={Post3} alt="" className='w-[300px] h-[300px] object-cover transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-indigo-500' />
              <img src={Post4} alt="" className='w-[300px] h-[300px] object-cover transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-indigo-500' />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default Profile
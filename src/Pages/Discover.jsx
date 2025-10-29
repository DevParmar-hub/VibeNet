import React from 'react'
import Navbar from '../Components/Navbar'
import DummyUser from '../assets/DummyUser.png'
import Users from '../Data/Users.json'


const Discover = () => {
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
                <div >
                    <div className='ml-10 pop text-5xl font-bold'>Discover people</div>
                    <div className='grid grid-cols-3 ml-40 pb-15'>
                        {Users.slice(1).map((user) => (
                            <div className='transform hover:scale-105 duration-300'>
                                <div className='bg-gradient-to-b from-[#5e52e8] to-white w-80 h-30 rounded-t-2xl ml-10 mt-10 flex justify-center items-center'>
                                    <img src={user.avatar} className='w-20 h-20 rounded-full object-cover' />
                                </div>
                                <div className='bg-white-200 w-80 h-40 ml-10 rounded-b-2xl '>
                                    <div className='text-2xl font-semibold pop mt-2 text-center'>{user.name}</div>
                                    <div className='text-xl pop font-normal text-gray-400 text-center'>{user.username}</div>
                                    <div className='flex justify-center mt-10'>
                                        <button className='text-normal text-white bg-indigo-700 rounded-2xl font-semibold pop w-30 h-12 ml-4 transform hover:scale-105 duration-300 hover:bg-indigo-600 mt-2'>Follow</button>
                                        <button className='text-normal bg-indigo-100 text-indigo-700 rounded-2xl font-semibold pop w-30 h-12 ml-4 transform hover:scale-105 duration-300 hover:bg-white mt-2'>Message</button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover
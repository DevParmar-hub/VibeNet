import { useState } from 'react'
import Vibe_Logo from '../assets/Vibe_Logo.jsx'
import Home_Logo from '../assets/Home_Logo.jsx'
import Message_Logo from '../assets/Message_Logo.jsx'
import Create_Logo from '../assets/Create_Logo.jsx'
import Profile_Logo from '../assets/Profile_Logo.jsx'
import Discover_Logo from '../assets/Discover_Logo.jsx'
import Setting_Logo from '../assets/Setting_Logo.jsx'

const Navbar = () => {
    const [NavStatus,setNavStatus] = useState(false)
    return (
        <>
            <div className= {`bg-indigo-700 h-[100vh] fixed transition-all duration-300 ease-in-out ${NavStatus ? 'w-45' : 'w-20'}`}>
                <div className='flex flex-col items-start ml-5 '>
                    <button className='mb-8 cursor-pointer flex items-center' onClick={()=>{setNavStatus(!NavStatus)}}>
                    <Vibe_Logo className='h-15 w-15 pt-2 relative right-3' />
                    {NavStatus && (<span className='text-xl text-white font-bold mt-1 relative right-2'>VibeNet</span>)}
                    </button>
                    <button  className=' cursor-pointer flex items-center mt-25'>
                    <Home_Logo />
                     {NavStatus && (<span className='text-xl text-white font-semibold ml-1'>Home</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5 '>
                    <Message_Logo />
                     {NavStatus && (<span className='text-xl text-white font-semibold  ml-1'>Messages</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5'>
                    <Create_Logo />
                     {NavStatus && (<span className='text-xl text-white font-semibold  ml-1'>New</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5'>
                    <Profile_Logo />
                     {NavStatus && (<span className='text-xl text-white font-semibold  ml-1'>Profile</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5'>
                    <Discover_Logo />
                     {NavStatus && (<span className='text-xl text-white font-semibold ml-1'>Discover</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center  mt-50'>
                    <Setting_Logo />
                     {NavStatus && (<span className='text-xl text-white font-semibold ml-1 '>Settings</span>)}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
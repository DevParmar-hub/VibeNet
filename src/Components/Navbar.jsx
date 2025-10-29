
import Vibe_Logo from '../assets/Vibe_Logo.jsx'
import Home_Logo from '../assets/Home_Logo.jsx'
import Message_Logo from '../assets/Message_Logo.jsx'
import Create_Logo from '../assets/Create_Logo.jsx'
import Profile_Logo from '../assets/Profile_Logo.jsx'
import Discover_Logo from '../assets/Discover_Logo.jsx'
import Setting_Logo from '../assets/Setting_Logo.jsx'
import { Link } from 'react-router-dom'

const Navbar = ({ NavStatus, setNavStatus }) => {
    return (
        <>
            <div
                className={`bg-indigo-700 h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out ${NavStatus ? 'w-[12rem]' : 'w-[5rem]'
                    }`}
            >
                <div className='flex flex-col items-start ml-5 '>
                    <button className='mb-8 cursor-pointer flex items-center' onClick={() => { setNavStatus(!NavStatus) }}>
                        <Vibe_Logo className='h-15 w-15 pt-2 relative right-3' />
                        {NavStatus && (<span className='text-xl text-white font-bold mt-1 relative right-2'>VibeNet</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-25'>
                        <Link to="/web/home"><Home_Logo /></Link>
                        {NavStatus && (<span className='text-xl text-white font-semibold ml-1'>Home</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5 '>
                        <Link to="/web/messages"><Message_Logo /></Link>
                        {NavStatus && (<span className='text-xl text-white font-semibold  ml-1'>Messages</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5'>
                      <Link to="/web/create"><Create_Logo /></Link>
                        {NavStatus && (<span className='text-xl text-white font-semibold  ml-1'>New</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5'>
                        <Link to="/web/profile"><Profile_Logo /></Link>
                        {NavStatus && (<span className='text-xl text-white font-semibold  ml-1'>Profile</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center mt-5'>
                        <Link to="/web/discover"><Discover_Logo /></Link>
                        {NavStatus && (<span className='text-xl text-white font-semibold ml-1'>Discover</span>)}
                    </button>
                    <button className=' cursor-pointer flex items-center  mt-50'>
                        <Link to="/web/settings"><Setting_Logo /></Link>
                        {NavStatus && (<span className='text-xl text-white font-semibold ml-1 '>Settings</span>)}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
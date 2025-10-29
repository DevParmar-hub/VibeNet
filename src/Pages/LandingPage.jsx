import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

                @keyframes gradient-animation{
                0% {background-position:0% 50%;}
                50% {background-position:100% 50%;}
                100% {background-position:0% 50%;}
                }

                .animation{
                    background:linear-gradient(-45deg, #1e1b4b, #312e81, #4f46e5, #0ea5e9);
                    background-size:400% 400%;
                    animation: gradient-animation 15s ease infinite;
                }
                
                .pop{
                font-family:'Poppins';
                }
            `}
            </style>
            <div className='w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center animation flex-col'>
                <div>
                    <div className='text-white pop text-9xl text-center font-extrabold'>VibeNet</div>
                    <div className='text-white pop text-2xl '>Connect, share and discover. Your social universe awaits.</div>
                </div>
                <div className='flex gap-10 mt-10'>
                    <button className='h-20 w-35 p-5 text-indigo-500 pop text-3xl font-medium shadow-2xl bg-white rounded-4xl transform hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-white/50 focus:outline-none'><Link to="/login">Login</Link></button>
                    <button className='h-20 w-39 p-5 text-white pop text-3xl font-medium bg-indigo-500/50 rounded-4xl transform hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-indigo-400/50 fous:outline-none'><Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
        </>
    )
}

export default LandingPage
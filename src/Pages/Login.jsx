import React from 'react'

const Login = () => {
    return (
        <>
            <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    @keyframes animation-gradient{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
    }
    .animation{
    background:linear-gradient(-45deg, #1e1b4b, #312e81, #4f46e5, #0ea5e9);
    background-size:400% 400%;
    animation:animation-gradient 15s ease infinite;
    }
    .pop{
    font-family:"Poppins";
    }
    `}
            </style>
            <div className='w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center animation'>
                <div className=' w-[35vw] h-[75vh] rounded-3xl shadow-2xl fade-in'>
                    <button className='pop w-25 h-10 text-xl text-white mt-5 ml-5 rounded-4xl bg-transparent transform hover:scale-110 transition-transform duration-300 focus:ring-4 focus:ring-indigo-400/50 fous:outline-none'>&larr;Back</button>
                    <div className='pop font-semibold text-white text-5xl  text-center'>Login</div>
                    <div className='flex flex-col items-center'>
                    <input type="text" placeholder='Email' className='mt-10  pl-4 bg-gray-100/15 w-90 h-17 rounded-4xl placeholder:text-xl  placeholder-indigo-200/70' />
                    <input type="text" placeholder='Password' className='mt-5 pl-4 bg-gray-100/15 w-90 h-17 rounded-4xl placeholder:text-xl  placeholder-indigo-200/70' />
                    <button className='h-15 w-80  mt-10 text-indigo-500 pop text-2xl font-medium shadow-2xl bg-white rounded-4xl transform hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-white/50 focus:outline-none'>Login</button>
                    <div className='mt-5 text-xl text-indigo-200/70 pop '>Don't have an account? Signup</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
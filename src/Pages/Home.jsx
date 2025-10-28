import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Post from '../Components/Post.jsx'
import DevLogo from '../assets/DevLogo.jpeg'
import DummyUser from '../assets/DummyUser.png'

const Home = () => {
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
        <div className='pl-30 flex gap-[2.5vw] bg-gray-100'>
          <div className=' w-[54vw] '>
            <div className='pop text-5xl font-bold mb-5'> Home Stream</div>
            <Post />
            <Post />
          </div>
          <div className='bg-indigo-100 w-[30vw] h-[110vh] sticky top-0'>
            <div className='pop text-5xl font-bold mb-5'>The Flow</div>
            <div className='w-[25vw] bg-indigo-700 m-auto rounded-2xl hover:bg-indigo-600 transform hover:scale-105 duration-300 shadow-2xl'>
              <div className='text-3xl font-semibold pop text-white pt-2 pl-4'>
                Vibe of the day
              </div>
              <div className='flex mt-5  pl-[2vw] pr-[2vw] pb-4'>
                <img src={DevLogo} alt="" className='h-12 w-12 rounded-full object-cover ' />
                <div className='flex flex-col ml-3'>
                  <div className='flex'>
                    <div className='pop text-xl font-semibold text-white'>Alexis Munroe</div>
                    <div className='text-base text-gray-300 ml-1'><sub> VibeNet Admin</sub></div>
                  </div>

                  <div className='pop text-white'>Each of us lives, dependent, and bound by our individual knowledge and our awareness </div>
                  <div className='text-right text-white pop'><sub>-Itachi Uchiha</sub></div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[25vw] m-auto '>
              <div className='mt-6 bg-white  pt-2  rounded-2xl transform hover:scale-105 duration-300 shadow-2xl'>
                <div className='text-3xl font-semibold pop text-indigo-700 text-center'>Vibes you might like</div>
                <div className='hover:bg-indigo-100'>
                  <div className='text-base pop hover:font-medium ml-3'>Ai and its rise.Is web design over?</div>
                  <div className='flex ml-4 mb-2'>
                    <img src={DummyUser} alt="" className='h-6 w-6 rounded-full' />
                    <div className='text-gray-500 text-base ml-2'>
                      3 hours ago .&nbsp; Tech&nbsp;.&nbsp;344 posts
                    </div>
                  </div>
                </div>
                <div className='hover:bg-indigo-100'>
                  <div className='text-base pop hover:font-medium ml-3'>Ferrari is out with a digital hypercar!!</div>
                  <div className='flex ml-4 mb-2'>
                    <img src={DummyUser} alt="" className='h-6 w-6 rounded-full' />
                    <div className='text-gray-500 text-base ml-2'>
                      4 hours ago .&nbsp;Automobiles&nbsp;.&nbsp;964 posts
                    </div>
                  </div>
                </div>
                <div className='hover:bg-indigo-100'>
                  <div className='text-base pop hover:font-medium ml-3'>Lando Norris at the top of the table after 15 rounds</div>
                  <div className='flex ml-4 mb-2'>
                    <img src={DummyUser} alt="" className='h-6 w-6 rounded-full' />
                    <div className='text-gray-500 text-base ml-2'>
                      7 hours ago .&nbsp;Sport&nbsp;.&nbsp;486 posts
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[25vw] m-auto '>
              <div className='mt-6 bg-white  pt-2 pl-4 rounded-2xl transform hover:scale-105 duration-300 shadow-2xl'>
                <div className='text-3xl font-semibold pop text-indigo-700 text-center'>Trending Vibes</div>
                <ul className='pb-4'>
                  <li className='list-disc text-xl pop ml-4 mb-1 mt-1 hover:font-semibold'>Ai and Automation</li>
                  <li className='list-disc text-xl pop ml-4 mb-1 hover:font-semibold'>Global Politics</li>
                  <li className='list-disc text-xl pop ml-4 hover:font-semibold'>Climate Change</li>
                </ul>
              </div>
            </div>
          </div>

          {/* vibe of the day
    trending vibes
    vibes you might like */}
        </div>
      </div>
    </>
  )
}

export default Home
import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Post from '../Components/Post.jsx'
import DevLogo from '../assets/DevLogo.jpeg'
import DummyUser from '../assets/DummyUser.png'
import { useEffect, useState } from "react";
// import Users from '../Data/Users.json'
// import Posts from '../Data/Posts.json'


const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch("http://localhost:5000/api/posts")
      const data = await res.json();
      setPosts(data)
      console.log("POSTS FROM SERVER:", data);
    }
    loadPosts()
  }, [])

  return (
    <>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    *{
    bg-gray;
    }
    `}
      </style>
      <div>


        <div className='flex  w-full overflow-x-hidden '>
          <div className='flex gap-[2.5vw]  w-full mr-4 relative'>
            <div className=' w-[54vw] ml-7'>
              <div className='pop text-5xl font-bold mb-5 p-4'> Home Stream</div>
              {
                posts.map((p) => (
                  <Post
                    key={p._id}
                    postId={p._id}
                    setPosts={setPosts}
                    posts={posts}
                  />
                ))
              
              }
            </div>
            <div className='bg-indigo-100 w-[30vw] h-[100vh] fixed left-[64.5vw] '>
              <div className='pop text-5xl font-bold mb-5 p-5'>The Flow</div>
              <div className='w-[25vw] bg-indigo-700 m-auto rounded-2xl hover:bg-indigo-600 transform hover:scale-105 duration-300 shadow-2xl'>
                <div className='text-3xl font-semibold pop text-white pl-5 pt-3'>
                  Vibe of the day
                </div>
                <div className='flex mt-5  pl-[2vw] pr-[2vw] pb-4'>
                  <img src={DevLogo} alt="" className='h-12 w-12 rounded-full object-cover ' />
                  <div className='flex flex-col ml-3'>
                    <div className='flex'>
                      <div className='pop text-xl font-semibold text-white'>Dev Parmar</div>
                      <div className='text-base text-gray-300 ml-1'><sub> VibeNet Admin</sub></div>
                    </div>

                    <div className='pop text-white'>Each of us lives, dependent, and bound by our individual knowledge and our awareness </div>
                    <div className='text-right text-white pop'><sub>-Itachi Uchiha</sub></div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-[25vw] m-auto '>


              </div>
              <div className='flex flex-col w-[25vw] m-auto '>
                <div className='mt-6 bg-white  pt-2 pl-4 rounded-2xl transform hover:scale-105 duration-300 shadow-2xl'>
                  <div className='text-3xl font-semibold pop text-indigo-700 text-center'>Trending Vibes</div>
                  <ul className='pb-2.5'>
                    <li className='list-disc text-xl pop ml-4 mb-1 mt-1 hover:font-semibold cursor-pointer'>Ai and Automation</li>
                    <li className='list-disc text-xl pop ml-4 mb-1 hover:font-semibold cursor-pointer'>Global Politics</li>
                    <li className='list-disc text-xl pop ml-4 hover:font-semibold cursor-pointer'>Climate Change</li>
                    <li className='text-l pop ml-70 hover:font-semibold hover:underline cursor-pointer text-indigo-600'>more</li>
                  </ul>
                </div>
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
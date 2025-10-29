import React from 'react'
import Navbar from '../Components/Navbar'
import Pfp_1 from '../assets/Pfp_1.jpg'
import Pfp_4 from '../assets/Pfp_4.jpg'
import Post1 from '../assets/Post1.jpg'
import Post2 from '../assets/Post2.jpg'
import Post3 from '../assets/Post3.jpg'
import Post4 from '../assets/Post4.jpg'
import Grid_Logo from '../assets/Grid_Logo'
import Chat_Logo from '../assets/Chat_Logo'
import Menu_Logo from '../assets/Menu_Logo'
import Users from '../Data/Users.json'
import Posts from '../Data/Posts.json'
import { useState } from 'react'
import Eye from '../assets/Eye'
import { useNavigate } from 'react-router-dom';



const Profile = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
    const navigate = useNavigate();

    const handlePostClick = (id) => {
    navigate(`/web/post/${id}`);
  };
  return (
    <>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    *{
    bg-gray-100}
    `}
      </style>
      {Users.filter((user) => user.id === 1).map((user) => (

        <div className='flex'>
          <div className='pl-30 w-[100%] h-[100%]  pb-10'>
            <div className='pop text-5xl font-bold mb-5 pop mt-5'>Profile</div>
            <div className='absolute right-25 top-20'>
              <button className='cursor-pointer shadow-2xl hover:scale-105 hover:shadow-indigo-500 transform duration-300 rounded-full'><Menu_Logo /></button>
            </div>
            <div className='flex mt-10 '>
              <img src={user.avatar} alt="" className='rounded-full h-40 w-40 object-cover' />
              <div >
                <div className='text-4xl ml-5 font-semibold pop mt-2'>
                  {user.username}
                </div>
                <div className=' ml-5 text-xl mt-2 pop'>
                  {user.name}
                </div>
                <div className='ml-5 text-xl pop mt-2'>
                  {user.bio}
                </div>
                <div className='flex gap-10 ml-5 mt-10 pop'>
                  <div className='flex'>
                    <div className='text-xl font-semibold'>{user.posts}</div><span className='pop text-xl font-normal ml-2'>Vibes</span>
                  </div>
                  <div className='flex'>
                    <div className='text-xl font-semibold'>{user.followers}</div><span className='pop text-xl font-normal ml-2'>Followers</span>
                  </div>
                  <div className='flex'>
                    <div className='text-xl font-semibold'>{user.following}</div><span className='pop text-xl font-normal ml-2'>Following</span>
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
                <button className='cursor-pointer'>
                <Grid_Logo />
                </button>
                <div className='mb-[5px] border-l-gray-300 border-l-3 pl-2'>
                  <button className='cursor-pointer mt-2'>
                  <Chat_Logo />
                  </button>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-[5px] justify-center mt-4  '>
                {Posts.map((post, index) => (
                  <div
                    key={post.id}
                    className="relative w-[300px] h-[300px] overflow-hidden  transform hover:scale-102 duration-300 hover:shadow-2xl hover:shadow-indigo-700"
                    onMouseEnter={() => setHoveredPost(post.id)}
                    onMouseLeave={() => setHoveredPost(null)}
                  >

                    <img src={post.image} alt="" className={`w-[300px] h-[300px] object-cover 
                     ${hoveredPost === post.id ? 'scale-105' : ''
                      }`} />
                       {hoveredPost === post.id && (
    <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-300">
      <button className="p-3 bg-indigo-600 rounded-full shadow-lg hover:scale-110 transform duration-200" onClick={()=>handlePostClick(post.id)}>
      <Eye/>
      </button>
    </div>
  )}


                  </div>
                ))}

              </div>
              <div>
              </div>

            </div>
            </div>
            </div>
      ))}

          </>
          )
}

          export default Profile
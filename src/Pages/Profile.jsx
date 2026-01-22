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
// import Users from '../Data/Users.json'
// import Posts from '../Data/Posts.json'
import { useState, useEffect } from 'react'
import Eye from '../assets/Eye'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [user, setUser] = useState(null);
  const [hoveredPost, setHoveredPost] = useState(null);
  const [posts, setPosts] = useState([])
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/web/post/${id}`);
  };



  useEffect(() => {

    const token = localStorage.getItem("token");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const userId = savedUser.id || savedUser._id;


    if (!savedUser || !token) {
      navigate("/login");
      return;
    }

    async function loadProfile() {
      const res = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await res.json();
      const localUser = JSON.parse(localStorage.getItem("user"));

      setUser({
        ...data,
        userImg: localUser?.userImg || data.userImg
      });
    }


    async function loadPosts() {
      const res = await fetch("http://localhost:5000/api/posts");
      const data = await res.json();
      const myPosts = data.filter(p => p.user === userId);
      setPosts(myPosts);
    }

    loadProfile();
    loadPosts();
  }, []);


  if (!user) return null;
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
      {/* {Users.filter((user) => user.id === 1).map((user) => ( */}

      <div className='flex'>
        <div className='pl-30 w-[100%] h-[100%]  pb-10'>
          <div className='pop text-5xl font-bold mb-5 pop mt-5'>Profile</div>
          {/* <div className='absolute right-25 top-20'>
            <button className='cursor-pointer shadow-2xl hover:scale-105 hover:shadow-indigo-500 transform duration-300 rounded-full'><Menu_Logo /></button>
          </div> */}
          <div className='flex mt-10 '>
            <img src={user?.userImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} alt="" className='rounded-full h-40 w-40 object-cover' />
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
                  <div className='text-xl font-semibold'>{posts.length}</div><span className='pop text-xl font-normal ml-2'>Vibes</span>
                </div>
                <div className='flex'>
                  <div className='text-xl font-semibold'>{user.followers?.length}</div><span className='pop text-xl font-normal ml-2'>Followers</span>
                </div>
                <div className='flex'>
                  <div className='text-xl font-semibold'>{user.following?.length}</div><span className='pop text-xl font-normal ml-2'>Following</span>
                </div>
              </div>
              <div className='flex'>
                <div>
                  <button className='text-normal text-white bg-indigo-700 rounded-2xl font-semibold pop w-60 h-12 ml-4 transform hover:scale-105 duration-300 hover:bg-indigo-600 mt-2' onClick={() => navigate("/web/edit")}>Edit profile</button>
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
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="relative w-[300px] h-[300px] overflow-hidden  transform hover:scale-102 duration-300 hover:shadow-2xl hover:shadow-indigo-700"
                  onMouseEnter={() => setHoveredPost(post._id)}
                  onMouseLeave={() => setHoveredPost(null)}>

                  <img src={post.postImg} alt="" className={`w-[300px] h-[300px] object-cover 
                     ${hoveredPost === post._id ? 'scale-105' : ''
                    }`} />
                  {hoveredPost === post._id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-300">
                      <button className="p-3 bg-indigo-600 rounded-full shadow-lg hover:scale-110 transform duration-200" onClick={() => handlePostClick(post._id)}>
                        <Eye />
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
    </>
  )
}

export default Profile
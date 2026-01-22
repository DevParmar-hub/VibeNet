import React from 'react'
import Navbar from '../Components/Navbar'
import DummyUser from '../assets/DummyUser.png'
import Users from '../Data/Users.json'
import { useState, useEffect } from 'react'


const Discover = () => {
    const [users, setUsers] = useState([]);
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const myUserId = String(savedUser?.id || savedUser?._id)

    const handleFollow = async (userId) => {
        try {
            const res = await fetch(
                `http://localhost:5000/api/users/${userId}/follow`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await res.json();

            setUsers(prev =>
                prev.map(u =>
                    u._id === userId
                        ? {
                            ...u,
                            followers: data.followed
                                ? [...u.followers, myUserId]
                                : u.followers.filter(id => String(id) !== myUserId)
                        }
                        : u
                )
            );
        } catch (err) {
            console.error("Follow error", err);
        }
    };


    useEffect(() => {
        async function loadUsers() {
            const res = await fetch("http://localhost:5000/api/users");
            const data = await res.json();
            setUsers(data);
        }
        loadUsers();
    }, []);

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
                    <div className='ml-10 pop text-5xl font-bold mt-5'>Discover people</div>
                    <div className='grid grid-cols-3 ml-40 pb-15'>
                        {users
                            .filter(u => String(u._id) !== String(myUserId))
                            .map(user => {
                                const isFollowing = user.followers?.some(
                                    id => String(id) === myUserId
                                );
                                return (
                                    <div key={user._id} className='transform hover:scale-105 duration-300'>
                                        <div className='bg-gradient-to-b from-[#5e52e8] to-white w-80 h-30 rounded-t-2xl ml-10 mt-10 flex justify-center items-center'>
                                            <img src={user.userImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} className='w-20 h-20 rounded-full object-cover' />
                                        </div>
                                        <div className='bg-white-200 w-80 h-40 ml-10 rounded-b-2xl '>
                                            <div className='text-2xl font-semibold pop mt-2 text-center'>{user.name}</div>
                                            <div className='text-xl pop font-normal text-gray-400 text-center'>{user.username}</div>
                                            <div className='flex justify-center mt-10'>
                                                <button
                                                    onClick={() => handleFollow(user._id)}
                                                    className={`text-normal rounded-2xl font-semibold pop w-30 h-12 ml-4 transform hover:scale-105 duration-300 mt-2
                                                         ${isFollowing
                                                            ? "bg-indigo-100 text-indigo-700 hover:bg-white"
                                                            : "bg-indigo-700 text-white hover:bg-indigo-600"
                                                        }`}
                                                >
                                                    {isFollowing ? "Following" : "Follow"}
                                                </button>
                                                <button className='text-normal bg-indigo-100 text-indigo-700 rounded-2xl font-semibold pop w-30 h-12 ml-4 transform hover:scale-105 duration-300 hover:bg-white mt-2'>Message</button>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover
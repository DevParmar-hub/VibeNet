import React from 'react'
import editb from '../assets/editb.png'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Edit = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        name: "",
        bio: ""
    });
    const [imageFile, setImageFile] = useState(null);



    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (!savedUser || !token) {
            navigate("/login");
            return;
        }

        setForm({
            username: savedUser.username || "",
            name: savedUser.name || "",
            bio: savedUser.bio || ""
        });
    }, []);

    const [profileImg, setProfileImg] = useState(
        JSON.parse(localStorage.getItem("user"))?.userImg || ""
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSave = async () => {
        const token = localStorage.getItem("token");
        const savedUser = JSON.parse(localStorage.getItem("user"));
        const userId = savedUser.id || savedUser._id;

        const formData = new FormData();
        formData.append("username", form.username);
        formData.append("name", form.name);
        formData.append("bio", form.bio);

        if (imageFile) {
            formData.append("userImg", imageFile);
        }

        const res = await fetch(
            `http://localhost:5000/api/users/${userId}`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            }
        );

        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/web/profile");
    };

    return <>
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
        <div >
            <div className='flex'>
                <button className='relative top-4.5 left-6 text-3xl cursor-pointer' onClick={() => navigate('/web/profile')}>&larr;</button>
                <div className='pop text-5xl font-bold mb-5 p-4 ml-7'>
                    Edit Profile
                </div>
            </div>
            <div className='flex'>
                <img src={profileImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} alt=""
                    className='rounded-full h-40 w-40 object-cover ml-10' />
                <input
                    type="file"
                    accept="image/*"
                    id="profileImageInput"
                    hidden
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (!file) return;

                        setProfileImg(URL.createObjectURL(file));
                        setImageFile(file);
                    }}
                />
                <button onClick={() =>
                    document.getElementById("profileImageInput").click()
                } className='cursor-pointer'>
                    <img src={editb} alt="" className='w-6 relative  left-3 transform hover:scale-105 transition-transform duration-300' />
                </button>

            </div>
            <div className='ml-5 mt-4'>

                <div>
                    <div className='text-indigo-600 font-semibold text-3xl'>Username</div>
                    <input type="text" className='bg-gray-300 w-60 h-10 pl-2 rounded-r-xl' value={form.username} name="username"
                        onChange={handleChange} />
                </div>
                <div>
                    <div className='text-indigo-600 font-semibold text-3xl'>Name</div>
                    <input type="text" className='bg-gray-300 w-60 h-10 pl-2 rounded-r-xl' name="name"
                        value={form.name}
                        onChange={handleChange} />
                </div>
                <div>
                    <div className='text-indigo-600 font-semibold text-3xl'>Bio</div>
                    <textarea className='bg-gray-300 w-100 h-20 pl-2 rounded-r-xl' name="bio"
                        value={form.bio}
                        onChange={handleChange} />
                </div>
            </div>
            <button onClick={handleSave} className='bg-indigo-600 text-white rounded-3xl h-12 w-22 text-2xl font-bold ml-5 mt-10  transform hover:scale-105 transition-transform duration-300'>Save</button>
        </div>
    </>


}

export default Edit
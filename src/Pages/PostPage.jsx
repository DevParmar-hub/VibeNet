import React from 'react'
import Navbar from '../Components/Navbar'
import Pfp_1 from '../assets/Pfp_1.jpg'
import Post1 from '../assets/Post1.jpg'
import Post2 from '../assets/Post2.jpg'
import DummyUser from '../assets/DummyUser.png'
import Like2 from '../Components/Like2'
import Reply from '../assets/Reply'
import Like from '../Components/Like'
import Share from '../Components/Share'
import Bookmark from '../assets/Bookmark'
import Send from '../assets/Send'
import { useNavigate, useParams } from 'react-router-dom';
import Posts from "../Data/Posts.json"
import Back from '../assets/Back'
import { useEffect, useState } from 'react'

const PostPage = () => {

    const { id } = useParams();
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        async function load() {
            const res = await fetch("http://localhost:5000/api/posts");
            const data = await res.json();

            const found = data.find(p => p._id === id);
            setPost(found);
            setComments(found.comments || []);

        }

        load();
    }, [id]);
    function timeAgo(date) {
        const diff = Math.floor((Date.now() - new Date(date)) / 1000);

        if (diff < 60) return "just now";
        if (diff < 3600) return `${Math.floor(diff / 60)}m`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
        if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
        if (diff < 2592000) return `${Math.floor(diff / 604800)}w`;
        if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo`;

        return `${Math.floor(diff / 31536000)}y`;
    }
    const handleSendComment = async () => {
        if (!commentText.trim()) return;

        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));


        const newComment = {
            username: user.username,
            text: commentText,
            likes: 0,
            createdAt: new Date().toISOString()
        };
        setComments(prev => [...prev, newComment]);
        setCommentText("");


        try {
            const res = await fetch(
                `http://localhost:5000/api/posts/${post._id}/comment`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({ text: newComment.text })
                }
            );

            const updatedPost = await res.json();
            setComments(updatedPost.comments);

        } catch (err) {
            console.error("Comment failed", err);
        }
    };


    if (!post) return <div className="m-20 text-2xl">Loading...</div>;

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
                <button className='absolute top-4 left-27 transform hover:scale-110 duration-300 hover:shadow-xl hover:bg-indigo-100 rounded-full' onClick={() => { navigate("/web/profile") }}><Back /></button>
                <div className='flex justify-center items-center w-screen h-screen ml-20'>
                    <div className='w-[64vw] h-[70vh] bg-amber-300 rounded-2xl flex'>
                        <div>
                            <div className='bg-indigo-700 rounded-tl-2xl w-[40vw] h-[9vh]'>
                                <div className='flex pt-2 pl-4 pb-2 items-center'>
                                    <img src={post.userImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} alt="" className='h-12 w-12 rounded-full object-cover ' />
                                    <div className='pop text-xl font-semibold text-white ml-2 pop'>{post.username}<span className="text-gray-400 text-sm ml-2">
                                        · {timeAgo(post.createdAt)}
                                    </span></div>
                                </div>
                            </div>
                            <img src={post.postImg} alt="" className='h-[61vh] w-[40vw] object-cover rounded-bl-2xl' />
                            <div className='bg-indigo-100 w-[8vw] m-auto flex gap-2 justify-center pt-2 pb-3 rounded-b-2xl '>
                                <Like />
                                <Share />
                                <Bookmark />
                            </div>
                        </div>
                        <div className='w-[24vw] bg-indigo-100 rounded-tr-2xl rounded-br-2xl relative'>
                            <div>
                                <div className='flex items-center'>
                                    <img src={post.userImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} alt="" className='rounded-full w-7 h-7 mt-4 ml-2 object-cover' />
                                    <div className='pop text-normal font-semibold text-black ml-2 mt-3 pop'>{post.username}<span className="text-gray-400 text-sm ml-2">
                                        · {timeAgo(post.createdAt)}
                                    </span></div>
                                </div>
                                <div className='ml-6 pr-2'>{post.caption}</div>
                                <div className='flex items-center justify-end mr-5 gap-1'>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mt-[1px]'>24</span>
                                        <Reply />
                                    </div>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mb-[2px] mr-[2px]'>{post.likes}</span>
                                        <div className='mt-[1.5px]'>
                                            <Like2 />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {comments.map((comment, index) => (
                                <div key={index}>

                                    <div className='flex items-center'>
                                        <img src={comment.userImg||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} alt="" className='rounded-full w-7 h-7 mt-4 ml-2' />
                                        <div className='pop text-normal font-semibold text-black ml-2 mt-3 pop'>{comment.username}<span className="text-gray-400 text-xs ml-1">
                                            · {timeAgo(comment.createdAt)}
                                        </span></div>
                                    </div>
                                    <div className='ml-6 pr-2'>{comment.text}</div>
                                    <div className='flex items-center justify-end mr-5 gap-1'>
                                        <div className='flex'>
                                            <span className='text-[13px] font-medium mt-[1px]'>112</span>
                                            <Reply />
                                        </div>
                                        <div className='flex'>
                                            <span className='text-[13px] font-medium mb-[2px] mr-[2px]'>{comment.likes}</span>
                                            <div className='mt-[1.5px]'>
                                                <Like2 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className='flex absolute bottom-5 left-8'>
                                <textarea
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Enter your comment"
                                    className="bg-gray-300 placeholder:pop w-[18vw] rounded-2xl pl-2"
                                />
                                <button className='' onClick={handleSendComment}><Send /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPage
import React from 'react'
import Pfp_1 from '../assets/Pfp_1.jpg'
import Post1 from '../assets/Post1.jpg'
import Like from './Like'
import Comment from './Comment'
import Share from './Share'
import Users from '../Data/Users.json'
import Posts from '../Data/Posts.json'
import Enlarge from '../assets/Enlarge'
import { useState } from 'react'
import Bookmark from '../assets/Bookmark'


const Post = ({ postId, posts, setPosts }) => {
  const post = posts.find(p => p._id === postId);
  if (!post) return null;
  const token = localStorage.getItem("token");
  const user = JSON.parse(atob(token.split(".")[1]));
  const myId = user.id;
  const isLiked = post.likes.includes(myId);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [open, setOpen] = useState(false)

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

  const likePost = async (postId) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5000/api/posts/${postId}/like`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const updated = await res.json();

    setPosts(posts =>
      posts.map(p =>
        p._id === postId
          ? { ...p, likes: updated.likes }
          : p
      )
    );
  };

  const handleSendComment = async () => {
    if (!commentText.trim()) return;

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const newComment = {
      username: user.username,
      userImg: user.userImg || "",
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
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ text: newComment.text })
        }
      );

      const updatedPost = await res.json();

      setComments(updatedPost.comments);

      setPosts(prev =>
        prev.map(p =>
          p._id === post._id ? { ...p, comments: updatedPost.comments } : p
        )
      );
    } catch (err) {
      console.error("Comment failed", err);
    }
  };


  return (

    <>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    `}
      </style>
      <div className='flex justify-center '>
        <div className='w-[48vw] relative bg-white mb-8 rounded-3xl pb-5 hover:bg-indigo-100 shadow-2xl transform hover:scale-105  duration-300'>
          <div className='flex mt-5  pl-[2vw] pr-[2vw]'>
            <img src={post.userImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="} alt="" className='h-12 w-12 rounded-full object-cover ' />
            <div className='flex flex-col ml-3'>
              <div className='pop text-xl font-semibold'>{post.username}
                <span className="text-gray-500 text-sm ml-2">
                  · {timeAgo(post.createdAt)}
                </span>
              </div>
              <div className='pop'>{post.caption}</div>
              <button className='absolute right-5 cursor-pointer transform hover:scale-105 duration-300' onClick={() => setOpen(true)}>
                <Enlarge />
              </button>
            </div>
          </div>
          <div className='flex flex-col items-center mt-5 mb-5'>
            <img src={post.postImg} alt="" className='w-[44vw] rounded-4xl' />
          </div>
          <div className='flex justify-between w-[40vw] m-auto'>
            <div className='flex '>
              <button className='cursor-pointer' type="button" onClick={() => {

                likePost(post._id);
              }}><Like isLiked={isLiked} /></button>
              <div className='ml-1 text-base mt-[1px] font-semibold'>{post.likes?.length}
              </div>
            </div>
            <div className='flex'>
              <button className='cursor-pointer transform hover:scale-110 transition-transform duration-300'><Comment /></button>
              <div className='ml-1 text-base mb-[5px] font-semibold'>{post.comments.length}</div>
            </div>
            <button><Share /></button>
            <button><Bookmark/></button>
          </div>

        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex bg-white rounded-2xl shadow-2xl w-[85vw] max-w-[1100px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT: IMAGE + ACTION BAR */}
            <div className="flex flex-col bg-white relative">
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-3 bg-white">
                <div className="flex items-center font-semibold">
                  <img
                    src={post.userImg}
                    className="h-10 w-10 rounded-full object-cover mr-2"
                  />
                  {post.username}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* IMAGE */}
              <div className="flex items-center justify-center">
                <img
                  src={post.postImg}
                  className="max-h-[65vh] object-contain"
                />
              </div>

              {/* ACTION BAR — SEPARATE DIV */}
              <div
                className="
    relative  bg-indigo-100  rounded-b-2xl shadow-2xl z-30 flex gap-6 w-40 pr-3 pl-4 p-2  left-76"
              >
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{post.likes.length}</span>
                  <button onClick={() => likePost(post._id)}>
                    <Like isLiked={isLiked} />
                  </button>
                </div>


                <button><Share /></button>
                <button><Bookmark /></button>
              </div>


            </div>

            {/* RIGHT: COMMENTS COLUMN */}


            <div className="w-[35%] bg-indigo-100 flex flex-col">
              <div className="flex-1 overflow-y-auto px-4 py-3 text-sm">
                {comments.map((c, i) => (
                  <div key={i} className="mb-3">
                    <span className="font-semibold">{c.username}</span>{" "}
                    {c.text}
                  </div>
                ))}
              </div>

              {/* COMMENT INPUT */}
              <div className="border-t px-3 h-[41px] flex items-center bg-indigo-100">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 outline-none text-sm"
                />
                <button
                  onClick={handleSendComment}
                  className="text-indigo-600 font-semibold ml-2"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  )
}

export default Post
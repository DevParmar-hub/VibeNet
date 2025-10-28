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

const PostPage = () => {
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
                <div className='flex justify-center items-center w-screen h-screen ml-20'>
                    <div className='w-[64vw] h-[70vh] bg-amber-300 rounded-2xl flex'>
                        <div>
                            <div className='bg-indigo-700 rounded-tl-2xl w-[40vw] h-[9vh]'>
                                <div className='flex pt-2 pl-4 pb-2 items-center'>
                                    <img src={Pfp_1} alt="" className='h-12 w-12 rounded-full object-cover ' />
                                    <div className='pop text-xl font-semibold text-white ml-2 pop'>Alex Braven&nbsp;&middot;&nbsp;<span>2h</span></div>
                                </div>
                            </div>
                            <img src={Post1} alt="" className='h-[61vh] w-[40vw] object-cover rounded-bl-2xl' />
                            <div className='bg-indigo-100 w-[8vw] m-auto flex gap-2 justify-center pt-2 pb-3 rounded-b-2xl '>
                                <Like />
                                <Share />
                                <Bookmark />
                            </div>
                        </div>
                        <div className='w-[24vw] bg-indigo-100 rounded-tr-2xl rounded-br-2xl relative'>
                            <div>
                                <div className='flex items-center'>
                                    <img src={Pfp_1} alt="" className='rounded-full w-7 h-7 mt-4 ml-2 object-cover' />
                                    <div className='pop text-normal font-semibold text-black ml-2 mt-3 pop'>Alex Braven&nbsp;&middot;&nbsp;<span>2d ago</span></div>
                                </div>
                                <div className='ml-6 pr-2'>Hi just wanted to share that I have finally got my dream car .Keep working hard guys DREAMS DO COME TRUE!!</div>
                                <div className='flex items-center justify-end mr-5 gap-1'>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mt-[1px]'>24</span>
                                        <Reply />
                                    </div>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mb-[2px] mr-[2px]'>112</span>
                                        <div className='mt-[1.5px]'>
                                            <Like2 />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center'>
                                    <img src={DummyUser} alt="" className='rounded-full w-7 h-7 mt-4 ml-2' />
                                    <div className='pop text-normal font-semibold text-black ml-2 mt-3 pop'>Robert B&nbsp;&middot;&nbsp;<span>1d ago</span></div>
                                </div>
                                <div className='ml-6 pr-2'>Amazing car , I can tell with experience . Courtesy of Kings Landing hahah</div>
                                <div className='flex items-center justify-end mr-5 gap-1'>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mt-[1px]'>112</span>
                                        <Reply />
                                    </div>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mb-[2px] mr-[2px]'>2,453</span>
                                        <div className='mt-[1.5px]'>
                                            <Like2 />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='flex items-center'>
                                    <img src={DummyUser} alt="" className='rounded-full w-7 h-7 mt-4 ml-2' />
                                    <div className='pop text-normal font-semibold text-black ml-2 mt-3 pop'>Dexter Morgan&nbsp;&middot;&nbsp;<span>4h ago</span></div>
                                </div>
                                <div className='ml-6 pr-2'>Much respect old friend</div>
                                <div className='flex items-center justify-end mr-5 gap-1'>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mt-[1px]'>3</span>
                                        <Reply />
                                    </div>
                                    <div className='flex'>
                                        <span className='text-[13px] font-medium mb-[2px] mr-[2px]'>450</span>
                                        <div className='mt-[1.5px]'>
                                            <Like2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex absolute bottom-5 left-8'>
                                <textarea name="" id="" placeholder='Enter your comment' className='bg-gray-300 placeholder:pop w-[18vw] rounded-2xl pl-2'></textarea>
                                <button className=''><Send /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPage
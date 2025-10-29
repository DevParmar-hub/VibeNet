import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


const Layout = ({ children }) => {
    const [NavStatus, setNavStatus] = useState(false)

    return (
        <>
            <div className="flex transition-all duration-300 ease-in-out">
                <Navbar NavStatus={NavStatus} setNavStatus={setNavStatus} />
                <div
                    className={`transition-all duration-300 ease-in-out min-h-screen ${NavStatus ? 'ml-[12rem] w-[calc(100%-13rem)] mr-[1rem]' : 'ml-[5rem] w-[calc(100%-6rem)] mr-[1rem]'}`}
                >
                    <div className="pr-4"><Outlet/></div>
                </div>
            </div>
        </>)

}

export default Layout
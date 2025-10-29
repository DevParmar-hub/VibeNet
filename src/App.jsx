import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import PostPage from './Pages/PostPage'
import Discover from './Pages/Discover'
import Layout from './Components/Layout'
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/web" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="discover" element={<Discover/>} />
        <Route path="post/:id" element={<PostPage />} />
        </Route>
      </Routes>
      {/* <LandingPage /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Layout> */}
      {/* <PostPage/> */}
      {/* <Home/> */}
      {/* <Discover/> */}
      {/* <Profile/> */}
      {/* </Layout> */}
    </>
  )
}

export default App

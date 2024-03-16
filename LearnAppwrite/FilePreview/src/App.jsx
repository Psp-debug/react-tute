import { useState } from 'react'
import './App.css'
import { account, storage } from "./appwrite/config"
import conf from "./conf/conf"
import { ID, Permission, Role } from "appwrite"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Posts from "./components/Posts"
import Login from "./components/Login"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

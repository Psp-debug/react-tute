import React, { useEffect, useState } from 'react'
import { account } from "../appwrite/config"
import "./Home.css"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/authSlice"

function Home() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    isLogin()
  }, [])

  const isLogin = async () => {
    try {
      const user = await account.get()
      setName(user.name)
      setEmail(user.email)
      console.log(user)
      dispatch(login(user))
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="dashboard">
        {email && name ? <>
          <form className="form">
            <label className="input" >Name: {name}</label>
            <label className="input" >Email: {email}</label>
          </form>
        </> :
        <h1>Loading...</h1>
        }
      </div>
    </>
  )
}

export default Home

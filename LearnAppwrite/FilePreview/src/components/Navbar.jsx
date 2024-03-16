import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { account } from "../appwrite/config"
import { logout } from "../store/authSlice"

function Navbar() {
    const [click, setClick] = useState(false)
    const authStatus = useSelector(state => state.status)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            const deleteSession = await account.deleteSession("current")
            dispatch(logout(null))
            navigate("/login")
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts" className="nav-links">
                                Posts
                            </Link>
                        </li>
                        {!authStatus
                            ? <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-links">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sign-up" className="nav-links">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                            : <>
                                <li className="nav-item">
                                    <button
                                        className="text-white flex items-center h-full"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
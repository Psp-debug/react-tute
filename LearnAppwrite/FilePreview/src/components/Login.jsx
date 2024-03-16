import React, { useState } from "react";
import "./Login.css"
import { account } from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email == "" || password == "") alert("Enter fields")
        else {
            getSession()
        }
    }

    const getSession = async () => {
        try {
            const oldUser = await account.createEmailSession(email, password)
            dispatch(login(oldUser))
            console.log(oldUser);
            navigate("/")
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
    }


    return (
        <div className="login-container mt-10">
            <h2 className="mb-5 text-bold flex">Login:</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

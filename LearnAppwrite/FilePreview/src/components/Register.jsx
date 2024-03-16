import React, { useState } from 'react';
import { account } from "../appwrite/config";
import { ID } from "appwrite";
import conf from "../conf/conf";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Registration = () => {
    // State to store email and password inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const register = async () => {
        try {
            const newAccount = await account.create(ID.unique(), email, password, name)
            const newSession = await account.createEmailSession(email, password)
            dispatch(login(newSession))
            navigate("/")
            console.log(newSession)
        } catch (error) {
            console.log(error);
        }
    }

    // Function to handle changes in email input
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle changes in password input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name == "" || email == "" || password == "") {
            alert("Enter the fields")
        } else {
            register()
        }
    };

    return (
        <div className="registration-form-container">
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <h1 className="flex text-bold mb-5">Registration: </h1>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;

import "../Styles/LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


const LoginPage = () => {
    const [userType, setUserType] = useState("Student");
    const navigate = useNavigate();
    const [form , setForm] = useState({
        email: "",
        password: ""
    });

    async function handleForm(){
        const res = await axios.post("http://localhost:3001/student/login" , form , {withCredentials: true});
        console.log(res)
        if(res.data === "User is not registered. Please register yourself"){
            alert("Register Yourself first");
            navigate("/signup")
        }
        if(res.data === "Logged in"){
            navigate("/home")
        }
    }
    
    return (
        <div className="container">
            {/* Header Section */}
            <header className="header">
                <div className="top-section">
                    <h1 className="title">DELIVERY MANAGEMENT</h1>
                </div>
            </header>

            {/* Main Content Section */}
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Login</h2>

                    {/* Toggle Radio Buttons */}
                    <div className="toggle-container">
                        <label className={userType === "Student" ? "active" : ""} style={{ marginRight: "10px"}}>
                            <input
                                type="radio"
                                name="userType"
                                value="Student"
                                checked={userType === "Student"}
                                onChange={() => setUserType("Student")}
                            />
                            Student             
                        </label>

                        <label className={userType === "Staff" ? "active" : ""}>
                            <input
                                type="radio"
                                name="userType"
                                value="Staff"
                                checked={userType === "Staff"}
                                onChange={() => setUserType("Staff")}
                            />
                            Staff
                        </label>
                    </div>

                    {/* Login Form */}
                    <input onChange={(e) => {
                        setForm(prev => (
                            {...prev , email: e.target.value}
                        ))
                    }} type="email" placeholder="Enter your email" className="input-box" />
                    <input onChange={(e) => {
                        setForm(prev => (
                            {...prev , password: e.target.value}
                        ))
                    }} type="password" placeholder="Enter your password" className="input-box" />

                    <button onClick={handleForm} className="login-button">Login</button>

                    <p className="signup-text">
                        Don't have an account? <a className="signup-link" onClick={() => navigate("/signup")}>Signup</a>
                    </p>

                    {/* Google Login */}
                    <button className="google-button">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                            alt="google-logo" className="google-icon-img" />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

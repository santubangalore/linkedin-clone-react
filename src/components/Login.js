import React, {useState, useEffect} from 'react';
import './Login.css';
import {auth} from '../app/firebase';


function Login() {
    const [email, setEmail]= useState("");

    const loginToApp= (e)=>{
      
    }
    const register=(e)=>{

    }
    return (
        <div className="Login">
            <img src="linkedin-logo.png" alt="linkedin logo" ></img>
            <form>
                <input placeholder="full name (required if regstering)" type="text"></input>
                <input placeholder="profile pic url (optional)" type="text"></input>
                <input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input placeholder="password" type="password"></input>
                <button type="submit" onClick="loginToApp">Sign In</button>
            </form>
            <p>Not a member?
                <span className="Login__register" onClick="register">Register now</span>
            </p>
        </div>
    )
}

export default Login

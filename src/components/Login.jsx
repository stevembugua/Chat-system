import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import Home from "./Home";


const Login = () => {

 const {currentUser , userLogin} = useContext(AuthContext)

const emailRef = useRef()
const passwordRef = useRef()

    return ( 
        
       <> 
        {
            currentUser ? <Home/> : <div className="loginPage">
            <div className="containerone">
                <h2>LOGIN {currentUser && <p>{currentUser.uid}</p>}</h2>
                <div className="google">
                    <img src="icons8-google-48.png" alt="google icon"/>
                    <button className="googleBtn">Sign up with google</button>
                </div>
                <div className="lines">
                    <div className="lineone"></div>
                    <p>Or sign in with email</p>
                    <div className="line"></div>
                </div>
               
                <form onSubmit={(e)=>{
                    e.preventDefault()
                        userLogin(emailRef.current.value, passwordRef.current.value)
                    }}>
                   <div className="div"><p>Email*</p></div> 
                    <div className="emailplace"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com" required /></div>
                
                
                    <div className="div"><p>Password*</p></div>
                    <div className="passplace"><input ref={passwordRef} type="password" placeholder="Input password" required/></div>
                
                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="loginBtn">
                    <input type='submit'   value='login'/>
                </div>
                </form>
                <div className="notregisterd">
                    <p>Not registered yet?</p>
                   <Link to='/SignUp'>Create an Account</Link>
                </div>
            </div>
        </div>

        }

       </>

     );
}
 
export default Login;
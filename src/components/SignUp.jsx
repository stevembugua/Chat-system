import React, { useRef } from "react";
import './SignUp.css'
import { Link } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";
import { useContext } from "react";


const SignUp = () => {

    const {currentUser, creatAccount} = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()

    return ( 
        <>
           <div className="loginPage">
            <div className="container">
                <h2>SIGN IN {currentUser && <p>{currentUser.email}</p>}</h2>
                  <form onSubmit={(e)=>{
                    e.preventDefault()
                    creatAccount(emailRef.current.value, passwordRef.current.value)
                  }}>
                    <div className="div"><p>UserName*</p></div> 
                    <div className="userplace"><input type="text" placeholder="johndoe"/></div>

                   <div className="div"><p>Email*</p></div> 
                    <div className="emailplace"><input ref={emailRef} type="email" placeholder="johndoe@gmail.com"/></div>

                    <div className="div"><p>Password*</p></div>
                    <div className="passplace"><input ref={passwordRef} type="password" placeholder="Input password"/></div>
                    <div className="divtwo"><p>Confirm Password*</p></div>
                    <div className="passplacetwo"><input ref={passwordRef} type="password" placeholder="Confirm password"/></div>
                   
                
                <div className="signBtn">
                    <input type='submit' value='Creat account'/>
                </div>
                </form>

                 <div className="haveaccount">
                        <p>Already have an account?</p>
                        <Link to='/Login'>Login</Link>
                    </div>
            </div>
        </div>
  
        
        
        </>
     );
}
 
export default SignUp;
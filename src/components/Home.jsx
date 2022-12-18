import React,{useRef} from 'react';
import AuthContext from "../Contexts/AuthContext";
import { useContext } from 'react';


import './Home.css'

const Home = () => {

    const {signOut, currentUser, addPlayer} = useContext(AuthContext)
     
    const nameRef = useRef()        
    const countryRef = useRef()
    

    return ( 
        <div className='body'>
            <div className="card">
                <form className="form" onSubmit={(e)=>{
                    e.preventDefault();
                    // signOut()
                    addPlayer({name: nameRef.current.value, country:countryRef.current.value}, currentUser)
                    nameRef.current.value = '';
                    countryRef.current.value = '';
                }}>
                    <label htmlFor=""><h2>Hello {currentUser.email}</h2></label>
                    <input ref={nameRef} className="input" type="text" placeholder="Add Player Name" required/>
                    <input ref={countryRef} className="input" type="text" placeholder="Add Player Country" required/>
                    <input className="submit" type="submit" />
                </form>
            </div>
        </div>
     );
}

export default Home;
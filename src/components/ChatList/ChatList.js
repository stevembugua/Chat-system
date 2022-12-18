import './ChatList.css';
import React   from 'react';
import JSONSERVER from './db.json'
import { useState } from 'react';

const ChatList = () => {
    const [search,setSearch] = useState('')
    
    return (
        <>
        

            <div className="main-chatlist">
            <div className="main-chatlist2">
            <div className="chatlist-heading">
                <h2>Chats</h2>
                <button className='btn'>
                    <i className='fa fa-ellipsis-h'></i>
                </button>
            </div>
            </div>
                <div className="chatlist-search">
                    <input type="text" placeholder="Search here" onChange={(event)=>{
                        setSearch(event.target.value).sort()
                    }} required />
                    <div className="scroll">
                        
                    {JSONSERVER.filter((val)=>{
                        if(search == ""){
                            return val
                        }else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    }).map((val , key)=>{
                        return (
                            <div className="user" key={key}>

                                <img  className='messengertoday' src="Sarra Art Girl 61+ Ideas.jpg" alt="picture"/>
                                <p>{val.first_name}</p>

                            </div>
                        )
                    })}  
                        
                       
                    </div>
                    
                    </div>
            </div>
            
           </>     
    )
}
 
export default ChatList;
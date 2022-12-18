import React from "react";
import './UserProfile.css'


const UserProfile = () => {
    return ( 
        
        <div className="UserProfile">
            <div className="UserProfile-search">
               <div className="search-icon">
                    <button className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                    <input type="text" placeholder="Search here" required />
                </div> 
            </div>
            <div className="UserProfilePic">
                <img src="Sarra Art Girl 61+ Ideas.jpg" alt="picture" className="UserProfileDetail"/>
            </div>
            <div className="UserProfileText">
                <h2>Diana Mellisa.</h2>
                <p>Home to be...</p>
            </div>
            <div className="chat-cam">
                <div className="chat">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285f4" d="M12 22H3a1 1 0 0 1-.707-1.707l1.964-1.964A10 10 0 1 1 12 22Z" class="colorb2b1ff svgShape"/></svg> 
                    
                </div>
                
                <div className="linear"></div>
                <div className="camcorder">
                    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                        <path d="m151.67 140c-19.191 0-35 15.812-35 35v210c0 19.188 15.809 35 35 35h280c19.188 0 35-15.812 35-35v-68.633l73.918 65.715c3.4375 3.0547 8.3477 3.8008 12.539 1.9141 4.1914-1.8906 6.8828-6.0664 6.875-10.664v-186.66c-0.011719-3.1523-1.2969-6.1641-3.5625-8.3516-2.2656-2.1914-5.3203-3.3672-8.4688-3.2695-2.7266 0.078125-5.3398 1.1094-7.3828 2.9141l-73.918 65.719v-68.68c0-19.188-15.812-35-35-35zm0 23.332h280c6.6641 0 11.664 5.0039 11.664 11.668v210c0 6.668-5 11.668-11.664 11.668h-280c-6.668 0-11.668-5-11.668-11.668v-210c0-6.6641 5-11.668 11.668-11.668zm385 49.312v134.71l-70-62.207v-10.297z"/>
                    </svg>
                </div>
            </div>
            <div className="chatvideo">
                <h3>Chat</h3>
                <h3>Video</h3>
            </div>
            <div className="favorites">
                <div className="userIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"/></svg>
                    <p>View friends</p>
                </div>
                <div className="likestwo">
                    <button className="heart">
                        <i class="fa fa-heart"></i>
                    </button>
                    <p>Add to favorites</p>
                </div>
            </div>
            <div className="attachments">
                <h3>Attachments</h3>
                <div className="additionals">
                    <button className="pdf">Pdf</button>
                    <button className="video">Video</button>
                    <button className="mp3">MP3</button>
                    <button className="image">Image</button>
                </div>
                <div className="view">
                    <button className="viewbtn">view all</button>
                </div>
            </div>
                
        </div>

     );
}
 
export default UserProfile;
import React from "react";
import './ChatContent.css'
import { Link } from "react-router-dom";



const ChatContent = () => {
    return ( 
        <div className="maincontent">
            <div className="container">
            <div className="profilePic">
                <img src="Sarra Art Girl 61+ Ideas.jpg" alt="profile picture" />
            </div>
            <div className="bighero">
                 <div className="userName">
                <p>Diana Mellisa<span>.</span></p>
                </div>
            <div className="supportBtn">
                <button className="search">
                    <i className="fa fa-search"></i>
                </button>
                <button className="heart">
                    <i class="fa fa-heart"></i>
                </button>
                <button className="bell">
                    <i class="fa fa-bell"></i>
                </button>
            </div>
            
            </div>
           

             </div>
            <div className="chattingwiththem">
            <div className="line"></div>
             <div className="lower">
                <div className="lowerline"></div>
                <div className="lowerlinetext">
                    <p>Yesterday</p>
                </div>
                <div className="lowerlinetwo"></div>
             </div>
             <div className="chat-messenger">
                     <div className="messenger">
                        <div className="messone"><p>Hi how have you been</p></div>
                        <img src="Sarra Art Girl 61+ Ideas.jpg" alt="picture"/>
                     </div>
               
                    <div className="messtwo"><p>Am good u?</p></div>
                    <div className="messtwo"><p>I've missed you...</p></div>
                    <img src="Sarra Art Girl 61+ Ideas.jpg" alt="picture" className="messengertwo"/>
               
                
                <div className="lowertoday">
                <div className="lowerlinetoday"></div>
                <div className="lowerlinetexttoday">
                    <p>Today</p>
                </div>
                <div className="lowerlinetwotoday"></div>
             </div>
               
             </div>
             <div className="messengertoday">
                <div className="messonetoday"><p>Me too,sorry for the hold up...</p></div>
                <img src="Sarra Art Girl 61+ Ideas.jpg" alt="picture"/>
            </div>
            <div className="messtwotoday">
             <p>No worries i totally understand </p>
             
            
            </div>
            <div className="messtwotoday">
             <p>uko sawa lakini </p>
             
            
            </div>
            <img src="Sarra Art Girl 61+ Ideas.jpg" alt="picture" className="messengertwotoday"/>

           
            <div className="line"></div>

            </div>
            <div className="send">
                <div className="big">
                    <div className="mic">
                        <button className="microphone">
                            <i className="fa fa-microphone"></i>
                        </button>
                    </div>
                    <div className="text">
                        <input type="text" placeholder="write something"/>
                    </div>
                    <div className="buttons">
                        <button className="clipbtn">
                            <i className="fa fa-paperclip"></i>
                        </button>
                        <button className="camerabtn">
                            <i className="fa fa-camera"></i>
                        </button>
                        <svg className="smilingface" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512"><path fill="#2c2b2d" d="M165.5,230A35.5,35.5,0,1,0,130,194.5,35.54,35.54,0,0,0,165.5,230Zm0-56A20.5,20.5,0,1,1,145,194.5,20.52325,20.52325,0,0,1,165.5,174Zm181,56A35.5,35.5,0,1,0,311,194.5,35.54,35.54,0,0,0,346.5,230Zm0-56A20.5,20.5,0,1,1,326,194.5,20.52325,20.52325,0,0,1,346.5,174Zm35.542,125.40674a7.496,7.496,0,0,0-9.21582,5.251A117.42927,117.42927,0,0,1,259.5,391h-7a117.41578,117.41578,0,0,1-113.32715-86.33447,7.49971,7.49971,0,1,0-14.46484,3.96875A132.417,132.417,0,0,0,252.5,406h7a132.58733,132.58733,0,0,0,127.793-97.37744A7.4999,7.4999,0,0,0,382.042,299.40674ZM416.51367,95.48682A227.00026,227.00026,0,0,0,95.48633,416.51318,227.00026,227.00026,0,0,0,416.51367,95.48682ZM256,468C139.10254,468,44,372.897,44,256S139.10254,44,256,44s212,95.103,212,212S372.89746,468,256,468Z"/></svg>
                        <button className="sendbtn">
                            <i className="fa fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
          </div>
     );
}
 
export default ChatContent;
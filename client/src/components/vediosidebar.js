import React from 'react'
import './sidebar.css'
import FavoriteIcon from "@material-ui/icons/Favorite";

import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function Vediosidebar({likes,messages,shares}) {
   
    return (
        <div className="videoSidebar">
      <div className="videoSidebar_button">
      
          <FavoriteIcon
            className="liked"
            fontSize="large"
           
          />
       
       
    
        <p>{likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
    )
}

export default Vediosidebar

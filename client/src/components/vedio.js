import React,{useRef,useState} from 'react'
import Sidebar from './vediosidebar'
import Footer from './vediofooter'
import './vedio.css'

function Vedio({ url, channel, desc, song, likes, shares, messages }) {
    const[play,setplay]=useState(false);
    const vedioref=useRef(null);

    const handlesubmit =()=> {
        if(play){
            vedioref.current.pause();
            setplay(false);
        }
        else{
            vedioref.current.play();
            setplay(true);
        }
    }




    return (
        <div className="vedio">


            <video
            onClick={handlesubmit}
            className="video_player"
            loop
             src={url}
             ref={vedioref}
             />

           


            <Footer  channel={channel} desc={desc} song={song}/>
            <Sidebar  likes={likes} shares={shares} messages={messages}/>

           
            
        </div>
    )
}

export default Vedio

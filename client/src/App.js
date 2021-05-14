import React,{useEffect,useState} from 'react'
import axios from './components/axios'
import Vedio from './components/vedio'
import './App.css'

function App() {
  const[vedio,setvedio]=useState([])

  useEffect(()=> {
    const fetchdata=async()=> {
      const response= await axios.get("/api/post")
      console.log(response)
      setvedio(response.data)

    }
    fetchdata()

  },[])
  return (
    <div className="app">
        <div className="app_videos">
     {vedio?.map(({_id, url, channel, desc, song, likes, shares, messages })=>(

      <Vedio 
        key={_id}
        url={url}
        channel={channel}
        desc={desc}
        song={song}
        likes={likes}
        shares={shares}
        messages={messages}
      
      />

       ))
     }

     
     
    </div>
    </div>
  );
}

export default App;

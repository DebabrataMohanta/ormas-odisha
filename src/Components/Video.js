import { Button } from '@mui/material'
import React from 'react'
import vid1 from '../images/video1.mp4'
import vid2 from '../images/video1.mp4'
import vid3 from '../images/video1.mp4'
import vid4 from '../images/video1.mp4'
import vid5 from '../images/video1.mp4'

export default function Video() {

   

  return (
    <>
    <div className="mobile-none"
      style={{width: "100%",backgroundImage: "linear-gradient(red,#bbb,0.5)", backgroundColor: "rgb(232, 255, 228)"}}>
      <div style={{backgroundColor: "rgba(130, 176, 113, 0.393)", margin: "20px"}}>
        <div className="row " style={{justifyContent: "space-between"}}>
          <div class="col-3">
            <button
              style={{textDecoration: "none",fontWeight: "bold", marginTop: "50px", marginLeft: "650px", fontSize:"xx-large", alignItems: "center", border: "solid 1px #fff", padding: "5px", borderRadius: "10px"}}>Video
              Gallery</button>
          </div>
          <div className="col-3">
          <Button variant="contained"><a className="waves-effect waves-light btn right " style={{color: "white"}} href="#/">View more</a></Button>
          </div>

        </div>
        <div style={{marginLeft:"200px",marginRight:"200px"}}>
        <div className="containerss" style={{display:"flex"}}>
          <div className="videos">
            <video className="active" src={vid1} muted loop></video>
            <video src={vid2} muted loop></video>
            <video src={vid3} muted loop></video>
            <video src={vid4} muted loop></video>
          </div>
          <div className="main-video" >
            <video src={vid5} muted controls autoplay loop></video>
          </div>
        </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

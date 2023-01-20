import React from 'react'
import img1 from '../images/a1.jpeg'
import img2 from '../images/a2.jpg'
import img3 from '../images/a3.jpeg'
import img4 from '../images/a4.jpg'
import img5 from '../images/a5.jpg'
import img6 from '../images/a6.jpeg'
import img7 from '../images/a7.jpg'
import img8 from '../images/a8.jpeg'
import img9 from '../images/a9.jpg'
import { Button } from '@mui/material'

export default function Gallery() {
  return (
    <>
    <div className="mobile-none"
      style={{width: "100%", height: "fit-content", backgroundImage: "linear-gradient(red,#bbb,0.5)", backgroundColor: "rgb(232, 255, 228)"}}>
      <div style={{height: "600px", justifyContent: "center", width: "100vw", backgroundColor: "rgba(226, 137, 43, 0.393)"}}>
        <div className="row " style={{justifyContent: "space-between"}}>
          <div className="col-3">
            <button
              style={{textDecoration: "none", fontWeight: "bold", marginTop: "50px", marginLeft: "650px", fontSize:"xx-large", alignItems: "center", border: "solid 1px #fff", padding: "5px", borderRadius: "10px"}}>Photo
              Gallery</button>
          </div>
          <div className="col-3">
          <Button variant="contained"><a className="waves-effect waves-light btn right " style={{color: "white"}} href="#/">View more</a></Button>
          </div>

        </div>

        <div className="gallery gallerypart" style={{marginLeft:"200px", height: "530px", width: "100%", marginTop: "15px"}}>

          <div className="clipped-border">
            <img src={img1} id="clipped" alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img2} id="clipped"   alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img3} id="clipped"  alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img4} id="clipped" alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img5} id="clipped" alt='' />
          </div>
          <div className="clipped-border">
            <img src={img6}id="clipped" alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img7} id="clipped" alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img8} id="clipped" alt=''/>
          </div>
          <div className="clipped-border">
            <img src={img9} id="clipped" alt=''/>
          </div>

          <div class="shadow"></div>

        </div>
      </div>
    </div>
      
    </>
  )
}

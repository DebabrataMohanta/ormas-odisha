import React from 'react'
import p1 from '../images/Products/p1.png'
import p2 from '../images/Products/p2.png'
import p3 from '../images/Products/p3.png'
import p4 from '../images/Products/p4.png'
import p5 from '../images/Products/p5.png'
import p6 from '../images/Products/p6.png'
import p7 from '../images/Products/p7.png'
import p8 from '../images/Products/p8.png'
import p9 from '../images/Products/p9.png'
import p10 from '../images/Products/p10.png'
import p11 from '../images/Products/p11.png'
import p12 from '../images/Products/p12.png'
import p13 from '../images/Products/p13.png'
import p14 from '../images/Products/p14.png'
import { Button } from '@mui/material'

export default function Product() {
  return (
    <>
      <div className="row " style={{justifyContent: "space-between"}}>
      <div className="col-3">
        <button
          style={{textDecoration: "none", fontWeight: "bold", marginTop: "50px", marginLeft: "650px", fontSize:"xx-large", alignItems: "center", border: "solid 1px #fff", padding: "5px", borderRadius: "10px"}}>Our Products</button>
      </div>
      <div className="col-3">
        <Button variant="contained"><a className="waves-effect waves-light btn right " style={{color: "white"}} href="#/">View more</a></Button>
      </div>

    </div>
    <div className="scroll-container" style={{backgroundColor: "rgba(0, 0, 0, 0.354)", height:"300px"}}>

      <marquee behavior="scroll" direction="right" onmouseover="this.stop();" onmouseout="this.start();" style={{whiteSpace: "nowrap"}}>
        <p style={{position: "relative"}}>
          <a href="#/" class="home-page-links"> <img src={p1}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>

          <a href="#/" class="home-page-links"> <img src={p2}
              style={{height: "270px", paddingLeft:"40px"}} alt="" /></a>

          <a href="#/" class="home-page-links"> <img src={p3}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>

          <a href="#/" class="home-page-links"> <img src={p4}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>

          <a href="#/" class="home-page-links"> <img src={p5}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>

          <a href="#/" class="home-page-links"> <img src={p6}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>

          <a href="#/" class="home-page-links"> <img src={p7}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
          <a href="#/" class="home-page-links"> <img src={p8}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
          <a href="#/" class="home-page-links"> <img src={p9}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
          <a href="#/" class="home-page-links"> <img src={p10}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
          <a href="#/" class="home-page-links"> <img src={p11}
              style={{height: "270px", paddingLeft:"40px"}} alt="" /></a>
          <a href="#/" class="home-page-links"> <img src={p12}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
          <a href="#/" class="home-page-links"> <img src={p13}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
          <a href="#/" class="home-page-links"> <img src={p14}
              style={{height: "270px", paddingLeft:"40px"}} alt=""/></a>
        </p>
      </marquee>
    </div>

    </>
  )
}

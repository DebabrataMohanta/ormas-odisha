import React from 'react';
import './Header.css'
import { Facebook } from "@mui/icons-material";
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';
import odishalogo from '../images/odishalogo.png';
import newormaslogo1 from '../images/newormaslogo1.png';
import cm_on_nav from '../images/cm_on_nav.png';
import Slider from './Slider'

const handlelink=()=>{

}


  

function Header() {
  return (
   
    <>
    <div className='sticky-position1'>
      <span id="header">
        <div className='container1'>
          <div className='scroll-container1'>
            <span className='mobile-responsive1'>
              <font className='govt-heading1'>Goverment of Odisha</font>
              <font className='odia1'> ଓଡ଼ିଶା ସରକାର</font>
            </span>
            <span className='mobile-none1'>
              <span className='container2'>
                <a className='yellow-text1' href={handlelink}>RTI | Feedback | Annual Report</a>
                <font className="odiayai1">ଓଡ଼ିଆ</font>
                <span className='social-icons1'>
                  <Facebook />
                  <Twitter />
                  <LinkedIn />
                  <YouTube />
                </span>
              </span>
            </span>

          </div>

          <img src={odishalogo} className="odishalogo1" />
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "2px",
            alignItems: "center"
          }}

          >
            <a href={handlelink}>
              <img src={newormaslogo1} alt="" className="mobile-none1" style={{ height: "84px", marginTop: "2px" }} /> </a>
            <marquee behavior="" class="mobile-none" direction=""
              style={{ color: "black", fontFamily: "Brush Script MT", fontSize: "19px", marginTop: "-13px" }}> Creating
              Competence and Values in Rural Odisha
            </marquee>
          </div>

          <div className="cm headercm" style={{ display: "flex" }}>
            <div className="cmText" style={{ whiteSpace: "nowrap" }}>
              <h6 style={{ margin: "0", paddingTop: "30%" }}><strong style={{ fontWeight: "bold" }} className="mobile-text1">Shri Naveen
                Patnaik</strong></h6>
              <p style={{ margin: "0", padding: "0" }}>Hon'ble Chief Minister</p>
            </div>
            <img style={{ marginTop: "-25px", marginBottom: "0", width: "110px", height: "126px", bottom: "0" }} src={cm_on_nav}
              alt="" className="brand-logo right1" />
          </div>

        </div>

      </span>

      <nav className="navbar1" role="navigation">
        <div className="nav-wrapper1">
          <ul className="main-container1">
            <li className="white-text1"
              style={{ borderLeft: "1px solid #14520b", paddingLeft: "2px", paddingRight: "2px", height: "43px" }}>
              <div className='home1'><a href="#test1" className="white-text1" style={{ outline: "0" }}>Home</a></div>
            </li>
            <li style={{ borderLeft: "1px solid #14520b", height: "43px" }}>
              <a className="white-text1" href="#!" data-target="aboutUsDrop">About Us
                <ArrowDropDown />
              </a>
            </li>
            <li style={{ borderLeft: "1px solid #14520b", height: "43px" }}>
              <a className="white-text1" href="#!" data-target="dduGkyDrop">DDU-GKY
                <ArrowDropDown /></a>
            </li>
            <li style={{ borderLeft: "1px solid #14520b", height: "43px" }}>
              <a href="#test1" className="white-text1">Activities
                <ArrowDropDown /></a>
            </li>
            <li style={{ borderLeft: "1px solid #14520b", height: "43px" }}>
              <a className="white-text1" href="#!" data-target="productsDrop">Products
                <ArrowDropDown /></a>
            </li>
            <li style={{ borderLeft: "1px solid #14520b", height: "43px" }}>
              <a className="white-text1" href="#!" data-target="exhibitionDrop">Exhibition
                <ArrowDropDown /></a>
            </li>
            <li style={{ borderLeft: "1px solid #14520b", borderRight: "1px solid #14520b", height: "43px" }}
              className="tab white-text1">
              <div className='home1'><a href="#test1" className="white-text1">Tender</a></div>
            </li>
          </ul>
          {/* <ul id="nav-mobile" className="sidenav" style={{display:"flex"}}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">DDU-GKY</a></li>
      <li><a href="#">Activities</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Exhibition</a></li>
      <li><a href="#">Tender</a></li>

    </ul> */}
       
        </div>
      </nav>
      </div>

      <div><Slider /></div>

    
        <div id="index-banner1">

</div>
<div className="scroltainer1" style={{backgroundColor: "rgb(38, 88, 21)"}}> &nbsp; <marquee
    behavior="scroll" direction="left" onmouseover="this.stop()" onmouseout="this.start()"> <a className="whitext1"
      href=""> Corrigendum
      for Outsource Agency </a>|| <a className="whitext1" href=""> EoI - SAGARMALA PHASE - II-extended upto 03.1.2023
    </a>|| <a className="whitext1" href=""> Corrigendum for Outsource Agency </a>|| <a className="whitext1" href=""> EoI -
      SAGARMALA PHASE - II-extended upto 03.1.2023</a> || <a className="whitext1" href=""> Corrigendum for Outsource
      Agency</a> || <a className="whitext1" href=""> EoI - SAGARMALA PHASE - II-extended upto 03.1.2023</a> </marquee>
 
</div>

        </>
        )
        }
       

        export default Header
import React from 'react'
import tech from '../images/ijentech.png'
export default function Footer() {
  return (
    <>
      <footer className="page-footer"
    style={{display: "flex",justifyContent: "space-between", flexDirection:"row",display: "flex",paddingTop: "0px",backgroundColor:"#2F8614",color:"white"}}>
     
    <div>
      <span style={{paddingLeft:"30px", paddingTop: "10px"}}>Home | FAQ | Site Map | Contact Us</span>
      <span style={{marginTop: "10px",paddingLeft:"30px", textAlign:"left"}}>Copyright &copy; 2023 ORMAS, All right
        reserved.
      </span>
    </div>
     
    <div>
      <span style={{textAlign:"right", padding: "1px",marginTop:"1px"}}>Powered By <a href="https://ijentech.com/"
            style={{textDecoration: "none"}} target="_blank"><img src={tech} height="45px"/></a>
      </span>
    </div>
  </footer>
    </>
  )
}

import React from 'react';
import img1 from "../images/pradip.jpg";
import img2 from '../images/sushil.jpg';
import img3 from '../images/guha.jpg';


export default function Grids() {

  const styles={
    border: "1px solid rgba(3, 52, 84, 1)",borderRadius: "10px 10px 10px 10px",
    boxShadow: "10px 10px 5px 0px rgba(3, 52, 84, 0.7)",
    height: "180px",
    width: "380px",
    overflow: "hidden",
    margin: "10px",
    backgroundColor: "#033454f7",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
  const styles2={border: "1px solid green",
  boxShadow: "10px 10px 5px 0px rgba(3, 52, 84, 0.7)",
  borderRadius: "10px 10px 10px 10px",
  height: "180px",
  width: "380px",
  overflow: "hidden",
  margin: "10px",
  backgroundColor: "#033454f7",
  color: "white",
  display: "flex",
  alignItems: "center",
  
  justifyContent: "space-between"
}
 const styles3={border: "1px solid green",
 boxShadow: "10px 10px 5px 0px rgba(3, 52, 84, 0.7)",
 borderRadius: "10px 10px 10px 10px",
 height: "180px",
 width: "410px",
 overflow: "hidden",
 margin: "10px",
 backgroundColor: "#033454f7",
 color: "white",
 display: "flex",
 alignItems: "center",
 
 justifyContent: "space-between"

 }
  return (
    <>
     
  <div className="nav-extended mobile-none">
    <div className="nav-wrapper">
     
      <div className="row">
        <div data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0"
          className="col s12 m3" style={styles}>
              
          <div className="Ormas-img">
            <img style={{paddingLeft:"10px",height: "100px",width: "100px",borderRadius: "50%"}} src={img1}
              alt=""/>
            
          </div>
          <div className="Ormas-text">
            <span className="flow-text" style={{fontSize: "16px", whiteSpace: "nowrap"}}>Shri Pradip Kumar Amat
            </span>
            <p style={{fontSize:"11px",textAlign:"left",margin:"0"}}>Hon'ble Minister, PR & DW Dept.</p>
            <p style={{fontSize:"16px",textAlign:"left",margin:"0"}}><a
                href="mailto: abc@example.com">pradip.ormashq@gmail.com</a>
            </p>
          </div>
        </div>

      
        <div data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0"
          className="col s12 m3 container-box-custom-shadow" style={styles2}>
          <div className="Ormas-img">
            <img style={{paddingLeft:"10px",height:" 100px",width: "100px",borderRadius: "50%"}} src={img2}
              alt=""/>
          </div>
          <div className="Ormas-text">
            <h6 className="flow-text" style={{fontSize: "16px", textAlign:"left", whiteSpace: "nowrap"}}>Shri Sushil Kumar
              Lohani,IAS
            </h6>
            <p style={{fontSize:"11px",textAlign:"left",margin:"0"}}>Principal Secretary, PR & DW Deptt</p>
            <p style={{fontSize:"16px",textAlign:"left",margin:"0"}}><a
                href="mailto: abc@example.com">sushil.ormashq@gmail.com</a>
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0"
          className="col s12 m3 container-box-custom-shadow" style={styles3}>
          

          <div className="Ormas-img">
            <img style={{paddingLeft:"2px",height:" 100px",width: "100px",borderRadius: "50%"}} src={img3}
              alt=""/>
          </div>
          <div className="Ormas-text" style={{padding: "20px"}}>
            <h6 className="flow-text" style={{fontSize: "15px", textAlign:"left", whiteSpace: "nowrap"}}>Ms Guha Poonam Tapas
              Kumar,IAS
            </h6>
            <p style={{fontSize:"11px",textAlign:"left",margin:"0"}}>Chief Executive Officer</p>
            <p style={{fontSize:"16px",textAlign:"left",margin:"0"}}><a
                href="mailto: abc@example.com">guha.ormashq@gmail.com</a>
            </p>
          </div>

        </div>
      </div>
      
    </div>
  </div>
    </>
  )
}

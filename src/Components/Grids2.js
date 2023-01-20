import React from 'react';



export default function Grids2() {
    
    const style1={
        border: "1px solid green",
              borderRadius: "10px 10px 10px 10px",
              overflow: "hidden",
              height: "500px",
              margin: "10px",
              backgroundColor: "#00777e",
              color: "white",
              width:"300px",
              marginTop:"20px"
    }
    const style2={
        border: "1px solid green",
              borderRadius: "10px 10px 10px 10px",
              overflow: "hidden",
              height: "500px",
              margin: "10px",
              backgroundColor: "#00777e",
              color: "white",
              width:"300px",
              marginTop:"20px"
    }
    const style3={
        border: "1px solid green",
              borderRadius: "10px 10px 10px 10px",
              overflow: "hidden",
              height: "500px",
              margin: "10px",
              color: "white",
              backgroundColor: "rgb(0, 119, 126)",
              width:"300px",
              marginRight:"95px",
              marginTop:"20px"
    }
    const style4={
        color: "rgb(246, 255, 0)", fontSize:"small", fontWeight: "bold"
    }
  return (
    <>
        
    
    <div className="nav-wrapper">
      <div className="row" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <div data-aos="slide-up" data-aos-duration="2000" className="col s12 m3 container-box-custom-shadow" style={style1}>
          <div className="icon-block">
            <div className="links"
              style={{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center"}}>
              <div
                style={{height:"40%", width:"90%",marginBottom:"3%",marginTop:"3%",padding:"1%",borderRadius:"10px 10px 10px 10px"}}>
                <h5>Mission</h5>
                <p style={{padding:"0",margin:"0",font:"15px",fontFamily:"'Lato', sans-serif"}}>To enable the poor to improve
                  their quality of life by delivering simple yet innovative, small yet high value solutions for
                  strengthening their livelihood and skill options.</p>
              </div>
              <div style={{height:"40%", width:"90%",padding:"1%",borderRadius:"10px 10px 10px 10px",marginBottom:"3%"}}>
                <h5>Vision</h5>
                <p style={{padding:"0",margin:"0", font:"15px"}}>To become a respected concern in the emerging markets creating
                  innovative and effective solutions for the rural producers/ unemployed youths for a sustainable
                  livelihood opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div data-aos="slide-up" data-aos-duration="2000" className="col s12 m3 container-box-custom-shadow" style={style2}>
          <div className="icon-block">
            <h5 className="block center">Tender/Advertisement</h5>
            <div className="links">

              <p>
                <a href="#/" className="home-page-links">&#x2022; Zoom Link for Pre-Bid Meeting for Impalement of Packaging
                  Agencies</a>
              </p>
              <p>
                <a href="#/" className="home-page-links"
                  style={style4}>Closing date : 07-Jan-2023</a>
               
              </p>
              <p>
                <a href="#/" className="home-page-links">&#x2022; Zoom Link for Pre-Bid Meeting for Impalement of Packaging
                  Agencies</a>
              </p>
              <p>
                <a href="#/" className="home-page-links "
                  style={style4}>Closing date : 07-Jan-2023</a>
               
              </p>

            </div>
          </div>
        </div>

       
        <div data-aos="slide-up" data-aos-duration="2000" className="col s12 m3 container-box-custom-shadow" style={style3}>
          <div className="icon-block">
            <h5 className="block center">Achievements</h5>
            <div className="links">

              <p>
                <a href="#/" className="home-page-links"> Outlet at Bhubaneswar Air Port</a>
              </p>
              <p>
                <a href="#/" className="home-page-links">Outlet at Bhubaneswar Air Port</a>

              </p>
              <p>
                <a href="#/" className="home-page-links"> COFFEE TABLE</a>
              </p>
              <p>
                <a href="#/" className="home-page-links">Rural Mason Training Programme</a>
              </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  
  </>
  )
}

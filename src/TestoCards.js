import React from 'react'
import { CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';

const TestoCards = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20px' }}>
      <CCard className="mb-3" style={{ maxWidth: '615px',maxHeight:"30vh", marginTop:"25vh", marginLeft:"-22vh" }}>
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage src={"images/Component 21 (1).png"} style={{paddingTop:"18px"}}/>
    </CCol>
    <CCol md={8}>
      <CCardBody>
        <CCardTitle style={{fontSize:"15px", fontFamily:"Arial", color:"#194D37", marginTop:"5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad 
        minim veniam, quis nostrud exercitation ullamco</CCardTitle>
       
        <CCardText style={{marginTop:"15px", marginLeft:"35vh"}}>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/ic_round-star-half.png"}alt=" " ></img>

          <h3 style={{width:"25vh", marginLeft:"-10vh", color:"#194D37", marginTop:"0vh"}}>Ali Hammam</h3>
          <p style={{width:"25vh", marginLeft:"4.5vh", marginTop:"10px",fontWeight:"normal", color:"#194D37"}}>Student</p>
        
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>

<CCard className="mb-3" style={{ maxWidth: '615px',maxHeight:"30vh", marginTop:"25vh", marginLeft:"-8vh" }}>
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage src={"images/Component 22 (1).png"} style={{paddingTop:"18px"}}/>
    </CCol>
    <CCol md={8}>
      <CCardBody>
        <CCardTitle style={{fontSize:"15px", fontFamily:"Arial", color:"#194D37", marginTop:"5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad 
        minim veniam, quis nostrud exercitation ullamco</CCardTitle>
       
        <CCardText style={{marginTop:"15px", marginLeft:"35vh"}}>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/Vector (1).png"}alt=" " ></img>
          <img src={"images/ic_round-star-half.png"}alt=" " ></img>

          <h3 style={{width:"25vh", marginLeft:"-10vh", color:"#194D37", marginTop:"0vh"}}>Ali Hammam</h3>
          <p style={{width:"25vh", marginLeft:"4.5vh", marginTop:"10px",fontWeight:"normal", color:"#194D37"}}>Student</p>
        


        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>



    </div>
  )
}

export default TestoCards

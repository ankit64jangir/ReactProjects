import React, { useState } from "react";
import { data } from "./data";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import "./App.css"

const App = () => {
  const [Card, setCard] = useState(data);

  return (
    <>
    <div className="reactback">
      <h1 className="reactname">React Projects</h1>
    </div>
    <div className="back">

      <MDBContainer >
        <MDBRow>
          {Card.map((cards) => {
            return (
              <MDBCol md="4" key={cards.id} className="anchor">
              <a href={cards.url} target="blank" >
                <MDBCard style={{margin: "10px", borderRadius: "10px"}}>
                  <MDBCardImage
                    className="img-fluid"
                    src={cards.img}
                    waves
                    style={{borderRadius: "10px"}}
                  />
                  <MDBCardBody className="cardbody">
                    <MDBCardTitle className="cardtitle">{cards.projectName}</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>

              </a>
              </MDBCol>
              
            );
          })}
          
        </MDBRow>
        
      </MDBContainer>
    </div>
    </>
  );
};

export default App;

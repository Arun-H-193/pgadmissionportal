import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../Assets/css/service.css';
import box from '../Assets/images/box.png'
import Footer from "./footer";
const stepsData = [
  {
    title: "Create Your Profile",
    description: "Sign up and create your student profile.",
    
  },
  {
    title: "Apply to Colleges",
    description: "Browse and apply to your desired colleges.",
    
  },
  {
    title: "Track Your Applications",
    description: "Stay updated on the status of your applications.",
    
  },
];

const PostGraduationApplicationComponent = () => {
  const [step, setStep] = useState(0);

  const renderSteps = () => {
    return (
      <div>
        <h2 className="stepstitle">{stepsData[step].title}</h2>
        <p className="stepspara">{stepsData[step].description}</p>
        <Image src={box} alt={`Step ${step + 1}`} />
      </div>
    );
  };

  const handleNextStep = () => {
    if (step < stepsData.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };



  return (
    <div>
        <div className="servicepage-head">
            <div>
                <h1 className="head-content">Easy steps to Apply for Post Graduation</h1>

            </div>
            <div className="para-content">
                <p>Register on out Portal, fill in yout personal and academic details,and apply to multiple colleges hassle-free</p>
            </div>
        </div>
        
        <Container className="container" style={{ margin: '10px', width: '95%', height: 'auto' }}>
        <h1 className="step-head">Post Graduation Application</h1>
        <Row className="container-row">
          <Col xs={12} md={6} className="container-col">
            {renderSteps()}
          </Col>
          <Col xs={12} md={6}>
            <div className="actions">
              <button className="steps-button" variant="primary" onClick={handlePreviousStep}>
                Previous
              </button>
              <button
                className="steps-button"
                variant="primary"
                onClick={handleNextStep}
                disabled={step === stepsData.length - 1}
              >
                Next
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default PostGraduationApplicationComponent;

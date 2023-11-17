import React from 'react';
import { useState, useEffect } from 'react';
import '../Assets/css/academic.css'; // Import your CSS file for styling
import Navbar from './navbar';
import { Modal,Button,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setAcademicData, selectAcademicData } from '../Redux/academicSlice';
import { academicPost } from '../Services/api';

const StudentCard = () => {
  const dispatch = useDispatch();
  const academicData = useSelector(selectAcademicData);

  const [showModal, setShowModal] = useState(false);

  
  const [formData, setFormData] = useState({
    sscSchool: '',
    sscDistrict: '',
    sscState: '',
    sscMarks: '',
    hscSchool: '',
    hscDistrict: '',
    hscState: '',
    hscMarks: '',
    ugCollegeName: '',
    ugDistrict: '',
    ugState: '',
    ugCgpa: '',
  });
  

  useEffect(() => {
    if (academicData) {
      setFormData(academicData);
    }
  }, [academicData]);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = async() => {
    dispatch(setAcademicData(formData));
    console.log(localStorage.getItem("Token"));
    const res = await academicPost(formData);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
        <Navbar/>
    <div className="student-card">
      {/* Personal Information */}
      

      {/* Academic Details */}
      <div className="academic-details">
        <h3>Academic Details</h3>

        {/* SSC Details */}
        <div className="academic-section">
          <h4>10th Grade (SSC)</h4>
          <p>School: {formData.sscSchool}</p>
          <p>District: {formData.sscDistrict}</p>
          <p>State: {formData.sscState}</p>
          <p>Marks: {formData.sscMarks}</p>
        </div>

        {/* HSC Details */}
        <div className="academic-section">
          <h4>12th Grade (HSC)</h4>
          <p>School: {formData.hscSchool}</p>
          <p>District: {formData.hscDistrict}</p>
          <p>State: {formData.hscState}</p>
          <p>Marks: {formData.hscMarks}</p>
        </div>

        {/* UG Details */}
        <div className="academic-section">
          <h4>Undergraduate (UG)</h4>
          <p>College: {formData.ugCollegeName}</p>
          <p>District: {formData.ugDistrict}</p>
          <p>State: {formData.ugState}</p>
          <p>CGPA: {formData.ugCgpa}</p>
        </div>
        <button className="edit-button" onClick={handleShow}><i className="fa fa-pen"></i> Edit</button>
                    
      </div>
    </div>
    {/* Edit form pop-up */}
    <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
          <h3>SSC</h3>
          <Form.Group controlId="sscSchool">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="sscSchool"
              value={formData.sscSchool}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="sscDistrict">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="sscDistrict"
              value={formData.sscDistrict}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="sscState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="sscState"
              value={formData.sscState}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="sscMarks">
            <Form.Label>Marks</Form.Label>
            <Form.Control
              type="text"
              name="sscMarks"
              value={formData.sscMarks}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <h3>HSC</h3>
          <Form.Group controlId="hscSchool">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="hscSchool"
              value={formData.hscSchool}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="hscDistrict">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="hscDistrict"
              value={formData.hscDistrict}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="hscState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="hscState"
              value={formData.hscState}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="hscMarks">
            <Form.Label>Marks</Form.Label>
            <Form.Control
              type="text"
              name="hscMarks"
              value={formData.hscMarks}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <h3>UG</h3>
          <Form.Group controlId="ugCollegeName">
            <Form.Label>College Name</Form.Label>
            <Form.Control
              type="text"
              name="ugCollegeName"
              value={formData.ugCollegeName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="ugDistrict">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="ugDistrict"
              value={formData.ugDistrict}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="ugState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="ugState"
              value={formData.ugState}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="ugCgpa">
            <Form.Label>CGPA</Form.Label>
            <Form.Control
              type="text"
              name="ugCgpa"
              value={formData.ugCgpa}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Overlay */}
            {showModal && <div className="overlay"></div>}
        
    </div>
  );
};

export default StudentCard;

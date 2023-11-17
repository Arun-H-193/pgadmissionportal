import React, { useState } from "react";
import '../Assets/css/profile.css';
import photo from '../Assets/images/8380015.jpg';
import { Modal, Button, Form } from "react-bootstrap";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
const ProfilePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    const handleShow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        // Reset form data if needed
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            address: '',
        });
    };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };

        const handleSubmit = () => {
            // Handle form submission logic here
            console.log('Form submitted:', formData);
            handleClose();
        };

    return (
        <div>
            <Navbar/>

            {/* Main */}
            <div className="main">
                <h2>PROFILE</h2>
                <div className="card">
                    <div>
                        <img src={photo} alt="profileimage" className="profilephoto"></img>
                    </div>
                    <div className="card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td>:</td>
                                    <td>John Doe</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>johndoe@example.com</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>:</td>
                                    <td>+1234567890</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>123 Main St, City, Country</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="edit-button" onClick={handleShow}><i className="fa fa-pen"></i> Edit</button>
                        <Link to="/application"><button className="edit-button" onClick={handleShow}><i className="fa fa-pen"></i> Next</button></Link>
                    </div>
                </div>
            </div>

            {/* Edit form pop-up */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="fullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Phone Number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter Address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Overlay */}
            {showModal && <div className="overlay"></div>}
        </div>
    );
};

export default ProfilePage;

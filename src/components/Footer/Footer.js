import React from 'react';
import "./Footer.css"
import { Col, Row } from 'react-bootstrap';
import { faHome, faEnvelope, faPhone, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="container-fluid footer-style mt-5">
            <Row>
                <Col lg="6" xs="5">
                    <div className="p-3 text-white">
                        <h3>Company</h3>
                        <p className="">Hope you have a good time learning in your academy <br /> We try to provide the best service <br /> We suggest to get the best out of the courses, practice on a daily basis. </p>
                    </div>
                </Col>
                <Col lg="6" xs="5">
                    <div className="p-3 text-white">
                        <h3>Links</h3>
                    </div>
                    <div className="footer-links">
                        <a href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
                        <a href="#"><FontAwesomeIcon icon={faHandsHelping} /> Support</a>
                        <p className="text-white"><FontAwesomeIcon icon={faEnvelope} /> Email: storpa@academy.com</p>
                        <p className="text-white"><FontAwesomeIcon icon={faPhone} /> +880 123 345 645</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
import React from 'react';
import "./Footer.css"
import { faHome, faEnvelope, faPhone, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="container-fluid footer-container mt-5">
            <div className="footer-style">
                <div className="footer-links mt-4">
                    <p className="text-white"><FontAwesomeIcon icon={faEnvelope} /> Email: wrapup73@academy.com</p>
                    <p className="text-white"><FontAwesomeIcon icon={faPhone} /> Phone: +880 123 345 645</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
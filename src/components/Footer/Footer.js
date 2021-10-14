import React from 'react';
import "./Footer.css"
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="container-fluid footer-container mt-5">
            <div className="footer-style">
                <div className="footer-links mt-4">
                    <p className="text-white"><FontAwesomeIcon icon={faEnvelope} /> Email: wrapup73@gmail.com</p>
                    <p className="text-white"><FontAwesomeIcon icon={faPhone} /> Phone: +8801758255514 , +8801314902906</p>
                    <div className="socials">
                        <p className="text-white my-2 me-1">Like us on</p>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://www.facebook.com/wrapupeducation" size="30" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <Row className="container mx-auto my-5 contact-container">
                <Col lg="7" xs="12">
                    <img className='img-fluid' src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" width="600" height="500" />

                </Col>
                <Col className="my-5" lg="5" xs="12">
                    <div className='border border-1 rounded p-2 container-fluid'>
                        <h1>Contact Us</h1>
                        <p>Name: <input className="input-field" type="text" /></p>
                        <p>Email: <input className="input-field" type="text" /></p>
                        <div className="mx-auto ps-4">
                            <textarea className='text-area text-field' name="comment" form="usrform" rows="5">Type your message...</textarea>
                        </div>
                        <br />
                        <button className="btn btn-danger submit-btn">Submit</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
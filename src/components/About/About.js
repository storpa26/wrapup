import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./About.css"
const About = () => {
    return (
        <div className="container">
            <Row className="mx-auto my-5">
                <Col className="my-5" lg="5" xs="12">
                    <div className='border border-1 rounded p-3 my-5'>
                        <h1 className="text-seconday fw-bold">About Us</h1>
                        <p className='text-success p-4'>We are a team of 8 professional instructors bringing you new courses everyday. We believe our contents are easy to understand and we try our best to make it beginner friendly. We've live support as well. No matter where you get stuck, we're here for you. Help is just one message away. Feel free to buy our courses. Enroll now and keep learning!</p>
                    </div>
                </Col>
                <Col lg="7" xs="12">
                    <img className='img-fluid' src="https://image.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg" alt="" width="600" height="500" />

                </Col>
            </Row>
        </div>
    );
};

export default About;
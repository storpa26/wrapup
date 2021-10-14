import logo from "../../logo.png"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
const Header = () => {

    //put all navlinks in header component

    return (
        <div className="container-fluid py-1 header-container">
            <div className="container text-center">
                <div className="nav-container">
                    <img className="logo-style" src={logo} alt="" width="250" height="160" />

                    <NavLink className="nav-style"
                        to="/home"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',

                        }}
                    >
                        Home
                    </NavLink >
                    <NavLink className="nav-style"
                        to="/courses"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',
                        }}
                    >
                        Courses
                    </NavLink>
                    <NavLink className="nav-style"
                        to="/organizers"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',
                        }}
                    >
                        Organizers

                    </NavLink>

                    <NavLink className="nav-style"
                        to="/about"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',
                        }}
                    >
                        About Us
                    </NavLink>
                    <a className="nav-style" href="#faqSec">FAQ</a>

                </div>
            </div>
            <div className="container my-5 mx-auto">
                <Row>
                    <Col lg="6" xs="12">
                        <h1 className="text-white fw-bold h1-tag">Look out, there is a chance, a dazzling chance
                            Already here! Then give a glance.</h1>
                        <p className="text-info">Let’s start settling all your unfinished syllabus.</p>
                    </Col>
                    <Col lg="6" xs="12">
                        <h4 className="text-info">Popular Now</h4>
                        <div className="course-card">

                            <img className="rounded" src="https://image.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg" alt="" height="270px" width="340px" />
                            <div className="p-3">
                                <h4 className="fw-bold">HSC Special Care</h4>
                                <div className="">
                                    <Link to="/courses">
                                        <button className="detail-btn">Go To Courses</button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
            <div className="container my-5 text-white">
                <Row>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Live Class</h4>
                            <p className="offers">All the live classes will be conducted <br /> through Zoom and Google Meet.</p>
                        </div>

                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">1 Course 1 Chapter</h4>
                            <p className="offers">We are providing very short term courses. The program is designed to cover only one <br /> chapter in one course.</p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Solve Class Program</h4>
                            <p className="offers">Enroll there and settle all your confusion regarding any topic.</p>
                        </div>
                    </Col>
                </Row>
            </div>


        </div >
    );
};

export default Header;
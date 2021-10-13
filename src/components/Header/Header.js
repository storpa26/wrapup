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
                            fontWeight: "bold",

                        }}
                    >
                        Home
                    </NavLink >
                    <NavLink className="nav-style"
                        to="/courses"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',
                            fontWeight: "bold",

                        }}
                    >
                        Courses
                    </NavLink>
                    <NavLink className="nav-style"
                        to="/instructors"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',
                            fontWeight: "bold",

                        }}
                    >
                        Instructors

                    </NavLink>

                    <NavLink className="nav-style"
                        to="/about"
                        activeStyle={{
                            borderBottom: 'solid 3px #FF7468',
                            fontWeight: "bold",

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
                        <h1 className="text-white fw-bold h1-tag">Our only concern is your education</h1>
                    </Col>
                    <Col lg="6" xs="12">
                        <h4 className="text-white">Popular Now</h4>
                        <div className="course-card">

                            <img className="rounded" src="https://media-eng.dhakatribune.com/uploads/2019/03/img-1244-copy-1527105676018-1554036868445.jpg" alt="" height="250px" width="320px" />
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
                            <h4 className="fs-2 fw-bold">Get 1 On 1 Care From Us</h4>
                            <p>We are providing a certificate to you after completing any course or subjects.</p>
                        </div>

                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-2 fw-bold">Get 1 On 1 Care From Us</h4>
                            <p>We are providing a certificate to you after completing any course or subjects.</p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-2 fw-bold">Become a teacher of our platform.</h4>
                            <p>We are giving you to become a teacher after completing your course and you can join freely.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default Header;
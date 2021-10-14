import React, { useEffect, useState } from 'react';
import "./Home.css"
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Category from '../Category/Category';
import { Col, Row } from 'react-bootstrap';
import task from "../../Task.png";
import live from "../../Live.png";
import sub from "../../Sub.png";
import diss from "../../Diss.png";
import Teachers from '../Teachers/Teachers';
import FAQ from '../FAQ/FAQ';
import { Link } from 'react-router-dom';

const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('/courses.JSON')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        fetch('/teachers.JSON')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch('/FAQ.JSON')
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])
    return (
        <div>
            <div className="container-fluid my-5 d-flex flexxx">
                <div className="homee container">
                    <Row className="gy-5">
                        <Col lg="6" xs="12">

                            <div className="home-cards">
                                <div>

                                    <img className="px-3" src={live} alt="" />

                                </div>
                                <div>
                                    <h5 className="fw-bold">Live Class</h5>
                                    <small>Online live class</small>
                                </div>

                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className="home-cards">
                                <div>

                                    <img className="px-3 my-3" src={diss} alt="" />

                                </div >
                                <div>
                                    <h5 className="fw-bold">Live Discuss</h5>
                                    <small>Online live discussion</small>
                                </div>

                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className="home-cards my-">
                                <div>

                                    <img className="px-3 my-3" src={task} alt="" />

                                </div>
                                <div>
                                    <h5 className="fw-bold">Problem Solving</h5>
                                    <small>Sharpen your brain for admission tests</small>
                                </div>

                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className="home-cards my-">
                                <div>

                                    <img className="px-3" src={sub} alt="" />

                                </div>
                                <div>
                                    <h5 className="fw-bold">Subjects</h5>
                                    <small>All major subjects are available</small>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </div>
                <div className="mt-5 right p-4">
                    <h3 className="fw-bolder fs-1">Start your learning <br />journey today!</h3>
                    <p>The best and cheapest way to deal with <br /> your drawbacks and build a strong <br /> foundation on any topic. </p>

                    <a className="detail-btn" target="_blank" href="https://forms.gle/kihmwLFwTevddh6f8" rel="noreferrer">Contact Us</a>

                </div>
                <br />


            </div >
            <section className="container category-container row mx-auto">
                <h3 className="fs-2 fw-bold text-center py-5">We Offer</h3>
                {
                    category.map(cat => <Category key={cat.id} cat={cat}></Category>)
                }
            </section>
            <section className="container category-container row mx-auto">
                <h3 className="fs-2 fw-bold text-center py-5">Organizers</h3>
                {
                    teacher.map(teach => <Teachers key={teach.id} teach={teach}></Teachers>)
                }
            </section>
            <section id="faqSec" className="container category-container mx-auto">
                <h3 className="fs-2 fw-bold text-center py-5">Frequently Asked Questions</h3>
                {
                    faqs.map(faq => <FAQ key={faq.id} faq={faq}></FAQ>)
                }
            </section>

            <div className="detail-btn-container my-5">
                <a className="detail-btn fw-bold" href="#top"><FontAwesomeIcon icon={faArrowAltCircleUp} /> Top</a>
                <Link to="/courses">
                    <button className="mx-2 detail-btn">
                        Enroll Now
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Home;
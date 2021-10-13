
import { Button, Col, Row } from 'react-bootstrap';
import "./CourseDetails.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const CourseDetails = () => {
    const [sub, setSub] = useState([]);
    useEffect(() => {
        fetch('/subjects.json')
            .then(res => res.json())
            .then(data => setSub(data))
    }, [])
    return (
        <div className="container mt-5 detail-container">
            <div className="ms-3">
                <Row className="gy-4">
                    {
                        sub.map((mp => {
                            return (
                                <Col lg="4" xs="12">
                                    <div className="subject-card">
                                        <div>
                                            <img src={mp.img} alt="" width="250" height="200" />
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <h4>{mp.title}</h4>
                                        </div>
                                        <div className="btn-container">
                                            <Link to={`${mp.id}`}>
                                                <button className="detail-btn">
                                                    See Pricing
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </Col>
                            )
                        }))
                    }


                </Row>
            </div>
            <div className="go-back-btn">
                <Link to="/courses">
                    <Button className="detail-btn text-center" variant="success"> <span className="fw-bold">Go Back</span> </Button>
                </Link>
            </div>

        </div >
    );
};

export default CourseDetails;
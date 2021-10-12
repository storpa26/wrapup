
import { Button, Col, Row } from 'react-bootstrap';
import "./CourseDetails.css"
import { Link } from 'react-router-dom';
const CourseDetails = () => {

    return (
        <div className="container mt-5 detail-container">
            <div className="ms-3">
                <Row className="gy-4">
                    <Col lg="4" xs="12">
                        <div className="subject-card">
                            <div>
                                <img src="https://img.freepik.com/free-vector/chalkboard-with-science-physics-formulas-background_97886-4558.jpg?size=626&ext=jpg" alt="" width="250" height="200" />
                            </div>
                            <hr />
                            <div className="text-center">
                                <h4>Physics</h4>
                            </div>
                            <div className="btn-container">
                                <Link to="/physics">
                                    <button className="detail-btn">
                                        See Pricing
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="subject-card">
                            <div>
                                <img src="https://i.pinimg.com/736x/c6/5a/52/c65a52c80a6c4687d0dd17cd700d5512.jpg" alt="" width="250" height="200" />
                            </div>
                            <hr />
                            <div className="text-center">
                                <h4>Chemistry</h4>
                            </div>
                            <div className="btn-container">
                                <Link to="/chemistry">
                                    <button className="detail-btn">
                                        See Pricing
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="subject-card">
                            <div>
                                <img src="https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148154055.jpg?size=626&ext=jpg" alt="" width="250" height="200" />
                            </div>
                            <hr />
                            <div className="text-center">
                                <h4>Math</h4>
                            </div>
                            <div className="btn-container">
                                <Link to="/math">
                                    <button className="detail-btn">
                                        See Pricing
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg="4" xs="12">
                        <div className="subject-card">
                            <div>
                                <img src="https://wallpaperaccess.com/full/2889825.jpg" alt="" width="250" height="200" />
                            </div>
                            <hr />
                            <div className="text-center">
                                <h4>ICT</h4>
                            </div>
                            <div className="btn-container">
                                <Link to="/ict">
                                    <button className="detail-btn">
                                        See Pricing
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </Col>
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
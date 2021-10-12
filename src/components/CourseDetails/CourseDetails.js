
import React, { useEffect, useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import "./CourseDetails.css"
import { Link } from 'react-router-dom';
const CourseDetails = (props) => {
    const { courseId } = useParams();

    // console.log(id);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(`/courses.JSON`)
            .then(res => res.json())
            .then(data => setDetail(data))


    }, []);
    const [price, setPrice] = useState([]);
    useEffect(() => {
        fetch(`/subject.JSON`)
            .then(res => res.json())
            .then(data => setPrice(data))

    }, []);


    return (
        <div className="container-fluid w-75 detail-container">
            <div className="sub-category">
            </div>




            {/* <h4 className="p-4">Get started with {detail[courseId - 1]?.title}</h4>
            <img className="img-fluid my-2" src={detail[courseId - 1]?.img} alt="" height="240" width="250" />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><FontAwesomeIcon icon={faPlayCircle} /> <span> Introduction</span> </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><FontAwesomeIcon icon={faPlayCircle} /> <span> Lesson #1</span> </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><FontAwesomeIcon icon={faPlayCircle} /> <span> Lesson #2</span> </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><FontAwesomeIcon icon={faLock} /> <span> Lesson #3</span> </Accordion.Header>
                    <Accordion.Body>
                        <h3>Please buy the course to unlock this lesson!</h3>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
            <Link to="/courses">
                <Button className="mx-auto mt-3 px-3" variant="success"> <span className="fw-bold">Go Back</span> </Button>
            </Link>
        </div>
    );
};

export default CourseDetails;
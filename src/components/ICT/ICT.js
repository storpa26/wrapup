import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ICT = () => {
    const [price, setPrice] = useState([]);
    useEffect(() => {
        fetch('/ict.JSON')
            .then(res => res.json())
            .then(data => setPrice(data))
    }, [])
    let history = useHistory();
    return (
        <div className="container-fluid">
            <h4 className="text-center mt-4 fw-bold">ICT Classes Pricing</h4>
            <div className="container w-75 mt-4">
                {
                    price.map((member => {
                        return (
                            <Accordion>
                                <Accordion.Item eventKey={member.id}>
                                    <Accordion.Header><FontAwesomeIcon className="mx-2" icon={faPlayCircle} /><span style={{ color: `${member.color}` }}>{member.title}
                                    </span> </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="price-info">
                                            <h6 className="text-muted">Class Code: {member.code}</h6>
                                            <h3 className="fw-bold text-info">#Pricing</h3>

                                            <h5 className="fw-bold text-danger">Regular</h5>
                                            <ul className="text-success">
                                                <li>{member.class1}</li>
                                                <li>{member.class2}</li>
                                                <li>{member.class3}</li>
                                            </ul>
                                            <h5 className="fw-bold text-danger">Admission</h5>
                                            <ul className="text-success">
                                                <li>{member.admission}</li>
                                            </ul>
                                            <h5 className="fw-bold text-danger">HSC Special</h5>
                                            <ul className="text-success">
                                                <li>{member.hsc}</li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    }
                    ))
                }
                <div className="go-back-btn">
                    <Button onClick={() => history.goBack()} className="detail-btn ps-1"> <span className="fw-bold">Go Back</span> </Button>
                </div>
            </div>
        </div>
    );
};

export default ICT;
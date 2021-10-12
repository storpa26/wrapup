import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"
const Card = (props) => {

    const { title, img, id, description } = props.cat
    return (
        <div className="col-12 col-lg-4 gy-5 gx-4">
            <div className="border border-1 p-3 main-card">
                <img src={img} alt="" height="160" width="230" />
                <hr />
                <h4 className="fw-bold text-center">{title}</h4>
                <p>{description}</p>
                <div className="detail-btn-container">
                    <Link to={`courses/${id}`}>
                        <button className="detail-btn mt-auto">See Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Card;
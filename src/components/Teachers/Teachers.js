import React from 'react';
import "./Teachers.css"
const Teachers = (props) => {


    const { name, fb, img, dept, institute, id } = props.teach;


    return (
        <div className='col-lg-6 col-sm-12'>
            <div className="teacher-card d-flex py-4">
                <div>
                    <img className="p-1" src={img} alt="" width="190" height="210" />
                </div>
                <div className="p-3">
                    <p className="fs-3 fw-bold">{name}</p>
                    <p>{institute}</p>
                    <p>{dept}</p>
                    <a className="prof-btn" href={fb} target="_blank" rel="noreferrer">View Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
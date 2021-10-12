import React from 'react';
import "./Error.css"
const Error = () => {
    return (
        <div className="container error-page d-flex justify-content-center align-items-center">
            <h1 className="fw-bold fs-1">404<br /> <span className="error-msg">Page Not Found!</span> </h1>
        </div>
    );
};

export default Error;
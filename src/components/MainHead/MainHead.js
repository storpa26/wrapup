import React from 'react';
import { NavLink } from 'react-router-dom';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHead = () => {
    return (
        <div className="container-fluid p-2 py-3 header-container">
            <div className="container text-center">
                <p className='text-lg-start fw-bold'><span className='text-warning'><FontAwesomeIcon icon={faChalkboardTeacher} /></span> <span className='text-white'>Storpa</span><span className="text-secondary">Academy</span> </p>
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
                    to="/contact"
                    activeStyle={{
                        borderBottom: 'solid 3px #FF7468',
                        fontWeight: "bold",

                    }}
                >
                    Contact

                </NavLink>

                <NavLink className="nav-style"
                    to="/about"
                    activeStyle={{
                        borderBottom: 'solid 3px #FF7468',
                        fontWeight: "bold",

                    }}
                >
                    About
                </NavLink>
            </div>

        </div>
    );
};

export default MainHead;
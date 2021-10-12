import logo from "../../logo.png"
import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHead = () => {
    return (
        <div className="container-fluid p-2 py-3 header-container">
            <div className="container text-center">
                <img src={logo} alt="" width="300" height="180" />
                <div className="nav-container">
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
                        About
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default MainHead;
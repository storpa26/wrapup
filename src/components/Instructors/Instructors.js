import React, { useEffect, useState } from 'react';
import Teachers from '../Teachers/Teachers';

const Instructors = () => {
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        fetch('/teachers.JSON')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])
    return (
        <div>
            <section className="container category-container row text-center mx-auto">
                <h3 className="fw-bold text-center py-5">Instructors</h3>
                {
                    teacher.map(teach => <Teachers teach={teach}></Teachers>)
                }
            </section>
        </div>
    );
};

export default Instructors;
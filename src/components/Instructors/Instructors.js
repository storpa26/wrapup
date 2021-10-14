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
            <section className="container category-container row mx-auto">
                <h3 className="fw-bold text-center py-5">Organizers</h3>
                {
                    teacher.map(teach => <Teachers key={teach.id} teach={teach}></Teachers>)
                }
            </section>
        </div>
    );
};

export default Instructors;
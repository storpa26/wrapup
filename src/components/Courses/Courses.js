import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('/courses.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className="container">
            <div className='row mx-auto'>
                {
                    course.map(cat => <Card key={cat.id} cat={cat}></Card>)
                }
            </div>
        </div>
    );
};

export default Courses;
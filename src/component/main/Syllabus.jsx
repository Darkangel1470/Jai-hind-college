import React from 'react';
import CreateImg from '../assets/helper';
import data from '../assets/data'


export default function Syllabus(props) {

    return (
        <div className="container bg-white mt-4 p-2 col-xl-9 syllabus">
            <CreateImg subject={props.subject} />
        </div>
    )
}
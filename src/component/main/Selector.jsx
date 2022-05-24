import React, { useState } from 'react';


export default function Selector(props) {
    // const [semester, setSemester] = useState(0)

    // const setSemester = props.setSemester;


    return (
        <div className="container bg-white rounded-3 p-2">
            <select className="form-select text-center" value={props.semester} aria-label="Default select example" onChange={e=>props.setSemester(e.target.value)}>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
            </select>
        </div>
    )
}

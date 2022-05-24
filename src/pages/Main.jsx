import React, { useState } from "react";
import Selector from "../component/main/Selector";
import SubjectList from '../component/main/SubjectList';
import Syllabus from "../component/main/Syllabus";


function Main() {

    const [semester, setSemester] = useState(1);
    const [selectedSub, setSelectedSub] = useState({sem:1,type:"",sub:"",});
    console.log(selectedSub);
    return (
        <div className="container-fluid px-5 py-4 main"> 
            <div className="row"> 
                <Selector semester={semester} setSemester={setSemester}/>
            </div>
            <div className="row"> 
                <SubjectList sem={semester} type="Skill" setSelectedSub={setSelectedSub}/>
            </div>
            <div className="row"> 
                <SubjectList sem={semester} type="General" setSelectedSub={setSelectedSub}/>
            </div>
            <div className="row">
                {selectedSub.type!="" && <Syllabus subject={selectedSub}/>}
            </div>
        </div>
    )
}

export default Main;
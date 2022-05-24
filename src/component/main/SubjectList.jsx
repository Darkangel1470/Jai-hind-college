import React from "react";
import data from '../assets/data'
import '../styles/subjectlist.css'
import SubjectDiv from './SubjectDiv'



//container that holds the subject divs, can be used for both skill Subjects as well as General subject
export default function SubjectList(props) {
    var subjects = (props.type === "Skill") ? data[props.sem].skill: data[props.sem].general;

    var subjectList = Object.entries(subjects).map(item =>item)
    return (
        <div className="container bg-white rounded-3 mt-4 p-2">
            <h2>{props.type} Subjects</h2>
            <div className="container-fluid">
                <div className="row"> 
                    {createSubjectdivs(subjectList, props.sem, props.type, props.setSelectedSub)}
                </div>
            </div>
        </div>
    )
}

//create individual buttons with names by looping through all the item in subjectList
function createSubjectdivs(subjectList, sem, type, setSelectedSub) {
    var key=0;
    var divs = subjectList.map(item =>{
        key++;
        return (
            <SubjectDiv subname={item[0]} type={type} sem={sem} key={key} setSelectedSub={setSelectedSub}/>
        )
    })
    return divs;
}
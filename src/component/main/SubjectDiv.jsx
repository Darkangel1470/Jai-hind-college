import React, { useState } from 'react';
import $ from "jquery";

export default function SubjectDiv(props) {
    var classes = "subjectdiv text-center "+ props.subname;
    var type = props.type.toLowerCase();
    const afterClick = function() {
        $(".subjectdiv").animate({
            "borderTopWidth": "0px",
            "borderLeftWidth": "0px",
            "borderBottomWidth": "5px",
            "borderRightWidth": "5px"
        }, "fast")
        $("."+props.subname).animate({
            "borderTopWidth": "5px",
            "borderLeftWidth": "5px",
            "borderBottomWidth": "0px",
            "borderRightWidth": "0px"
        }, "fast")

        setTimeout(function() {
            props.setSelectedSub({sem: props.sem, type: type, sub: props.subname})
        },500)

        $(".syllabus").slideUp(500, function() {
            setTimeout(function() {
                $(".syllabus").slideDown(500);
            },300)
        });
    }

    return (
        <div className="col-3"onClick={afterClick} > 
            <div className={classes}>{props.subname}</div>  
        </div>
    )
}
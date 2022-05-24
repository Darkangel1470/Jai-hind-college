import React from 'react';
import data from "./data";


export default function CreateImg(props) {//props has subject [sem, type, sub]

    var p = props.subject

    var linkList = data[p.sem][p.type][p.sub]

    var imgList = linkList.map((link) => {
        return <img
                    src={link}
                    width="100%"
                />
    })
    return imgList
}
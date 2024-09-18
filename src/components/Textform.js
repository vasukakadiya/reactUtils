import React from 'react';

import { useState } from "react";





export default function Textform(props) {
    const[set,str]=useState("Enter your text here!")
  
        

    let setval=()=>{
        let tva=set.toUpperCase();
        str(tva);
        props.showAlert("Converted to Uppercase!","Success")
        
    }
    let txtnew=(event)=>{
      
        console.log("on change");
        str(event.target.value)
        


    

    }
 
  return (
    <>
<div className={`container text-${props.mode==='dark'?'light':'dark'}`}>

    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className="form-control" value={set} id='txt' onChange={txtnew} rows="6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={setval}>CONVERT</button>
      
    </div>
    <p>{set.split(" ").length} words and {set.length} characters.</p>
    <h1>PREVIEW</h1>
    <p>{set}</p>
  </div>
    </>
  )
}


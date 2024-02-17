import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function UpdateStudents({students,setStudents,editIdx}) {
    const {id} = useParams();
    const editStudent = students[id];
    const [name,setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [qualification,setQualification] = useState();
    
useEffect(()=>{
 setName(editStudent.name);
 setBatch(editStudent.batch);
 setGender(editStudent.gender);
 setQualification(editStudent.qualification);
 
},[id])
 
const history = useHistory();
     function updateStudent(){
         const updatedObj = {
            name,
            batch,
            gender,
            qualification
         }
         students[id] = updatedObj
         setStudents([...students])
         history.push("/");
     }
     const canSave = Boolean(name && batch && gender && qualification !== "");
  return (
 
 
 
    <main> 
         <section className='page-head'>    
    <h3>Edit-Student Page </h3>
   <p>Edit the below form and press Update-Student button</p>     
   </section> 
  <br/> 

<div className='input'>

    
        <input
        type='text'
        placeholder='Enter Name'
        value={name}
        onChange={(e)=>setName(e.target.value.trim())}
        /> 

<br/>
        <input
        type='text'
        placeholder='Enter Batch'
        value={batch}
        onChange={(e)=>setBatch(e.target.value.trim())}

        /> 

<br/>
        <input
        type='text'
        placeholder='Enter Gender'
        value={gender}
        onChange={(e)=>setGender(e.target.value.trim())}

        />

        <br/> 
        <input
        type='text'
        placeholder='Enter Qualification'
        value={qualification}
        onChange={(e)=>setQualification(e.target.value.trim())}

        /> 
        <br/>
<button onClick={updateStudent}>Update Students</button>
    
    </div>


    </main>
 
  
  )
}

export default UpdateStudents
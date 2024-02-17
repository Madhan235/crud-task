import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddStudents({students,setStudents}) {
    const [name,setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [qualification,setQualification] = useState();
const history = useHistory();
const createStudent = () => {
const newStudent = {
    name, 
    batch,
    gender,
    qualification

}
setStudents([...students, newStudent]) ;
history.push("/");
}

const canSave = Boolean(name && batch && gender &&  qualification !== "");
  return (
   <>
   <main>

   
    <section className='page-head'>    
    <h3>Add-Student Page </h3>
   <p>We can add New student Here</p>     
   </section> 
  <br/> 
    
    <section className='input'>

    
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
        <button onClick={createStudent} disabled={!canSave} style={{ cursor: canSave ? "pointer" : "not-allowed" }}>
         Add Students
        </button>

    
    </section>
    </main>
    </>
  )
}

export default AddStudents
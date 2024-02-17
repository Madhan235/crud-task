import React, { useState } from 'react'
 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddMentors({teacher,setTeacher}) {
    const [name, setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [subject,setSubject] = useState();

    const history = useHistory();
    const createMentor=()=>{
const newMentor = {
    name,
    batch,
    gender,
    subject
}
setTeacher([...teacher,newMentor])
history.push("/mentors")
    }
    
    const canSave = Boolean(name && batch && gender && subject !== "");

  return (
    
    
    <main>
    <section className='page-head'>    
    <h3>Add-Mentor Page </h3>
   <p>Fill the below form and press Add-Mentor button</p>     
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
placeholder='Enter Subject'
value={subject}
onChange={(e)=>setSubject(e.target.value.trim())}

/> 
<br/>
<button onClick={createMentor}
disabled={!canSave} style={{ cursor: canSave ? "pointer" : "not-allowed" }}
>Add Mentor</button>
   </section>
   </main>
  )
}

export default AddMentors
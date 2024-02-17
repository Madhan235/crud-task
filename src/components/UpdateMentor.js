import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function UpdateMentor({teacher, setTeacher}) {
    const {tid} = useParams();
    const editTeacher = teacher[tid];
    const [name, setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [subject,setSubject] = useState();
    
     
 
    

    useEffect(()=>{
        
        setName(editTeacher.name);
        setBatch(editTeacher.batch);
        setGender(editTeacher.gender);
        setSubject(editTeacher.subject);
       
       },[tid])
    
        
       const history = useHistory();
            function updateMentor(){
                const updatedObject = {
                   name,
                   batch,
                   gender,
                   subject,
                }
                teacher[tid] = updatedObject
                setTeacher([...teacher])
                history.push("/mentors");
            }

            const canSave = Boolean(name && batch && gender && subject !== "");

            
            
  return (
    <main>
    <section className='page-head'>    
    <h3>Edit-Mentor Page </h3>
   <p>Edit the below form and press Update-Mentor button</p>     
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
onChange={(e)=>setBatch(e.target.value ? e.target.value : undefined )}

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
<button onClick={updateMentor}
disabled={!canSave} style={{ cursor: canSave ? "pointer" : "not-allowed" }}
>Update-Mentor</button>

</div>
</main>
  )
}

export default UpdateMentor
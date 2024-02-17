import React, { useState } from 'react'
 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Mentors({teacher,setTeacher}) {

   const deleteMentor = (mentId)=>{
const remainingMentros = teacher.filter((ment,id)=>(id !== mentId))  
setTeacher(remainingMentros)  
   } 
 const history = useHistory();
    
    
  return (
    <>
   <section className='page-head'>    
   <h3>Mentors Dashboard </h3>
  <p>This Page contains all Mentors Data</p>     
  </section> 
 <br/> 
   
     <div className='card-container'>
 
 {teacher.map((teach,mid)=>(
  
    <div className='card' key={mid}>
<h3>{teach.name}</h3>
<p>{teach.batch}</p>
<p>{teach.gender}</p>
<p>{teach.subject}</p>
<div className='button-container'>
<button 
onClick={()=>history.push(`/editmentor/${mid}`)}
>Edit</button>
<button 
onClick={()=>deleteMentor(mid)}
>Delete</button>
</div>
 </div>
 
 ))}
 </div>
 </>
   
  )
}

export default Mentors
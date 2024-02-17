import React, { useState } from 'react'
 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Students({students, setStudents, setEditIdx}) {


function deleteStudents(studId){
const remainingStudnts = students.filter((stud,idx)=>idx !== studId)
setStudents(remainingStudnts);
}
const history = useHistory();
  return (
    <div> 
    <section className='page-head'>    
  <h3>Students Dashboard </h3>
 <p>This Page contains all students data</p>     
 </section> 
<br/> 

<div className='card-container'>
 
 {students.map((stud,idx)=>(
  
    <div className='card' key={idx}>
<h3>{stud.name}</h3>
<p>{stud.batch}</p>
<p>{stud.gender}</p>
<p>{stud.qualification}</p>
<div className='button-container'>
<button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>
<button onClick={()=>deleteStudents(idx)}>Delete</button>
</div>
 </div>

 ))}

    

</div>

 
    </div>
  )
}

export default Students
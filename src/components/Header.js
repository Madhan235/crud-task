import React from 'react'
import { NavLink } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
 
function Header() {
    const location = useLocation();
  return (
    <header>
         
            <h1>Students/Mentors.info</h1>
            <section className='links'>
            <a href="/add"  ><b>Add-Students</b></a>
            <a href="/mentors"  ><b>Mentors-List</b></a>
            <a href="/addmentors" ><b>Add-Mentors</b></a>
             
         </section>

    </header>
  )
}

export default Header
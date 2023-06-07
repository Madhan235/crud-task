import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Base from './Base/Base';
import Students from './components/Students';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import AddStudents from './components/AddStudents';
import UpdateStudents from './components/UpdateStudents';
import { useState } from 'react';
import data from './Data/data';
import Nopage from './components/Nopage';

function App() {

  const [students, setStudents] = useState(data);
  const [editIdx,setEditIdx] = useState()


  return (
    <div className="App">
         <Switch>
          <Route exact path="/">
            <Students
            students={students}
            setStudents={setStudents}
            />
          </Route>
          <Route path="/add">
            <AddStudents
            students={students}
            setStudents={setStudents}
            />
          </Route>
          <Route path="/edit/:id">
            <UpdateStudents
            students={students}
            setStudents={setStudents}
            editIdx={editIdx}
            />
          </Route>
          <Route path="**">
<Nopage/>
          </Route>
         </Switch>
    </div>
  );
}    
 

export default App;

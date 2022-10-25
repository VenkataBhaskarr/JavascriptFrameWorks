import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Form from './Form'
import Tasks from './Tasks'
import {useState} from 'react'
function App() {
  const [tasks , setTasks] = useState([
    {
      id: 1,
      name: 'Doctors Appointment',
      day: 'May 5th at 2:30pm',
    },
    {
      id: 2,
      name: 'Meeting at School',
      day: 'May 6th at 1:30pm',
    },
    {
      id: 3,
      name: 'Food Shopping',
      day: 'May 7th at 12:30pm',
    }
])
const deleteTask = (id) => { 
  setTasks(tasks.filter((task) => task.id !== id))
} 
const addTask= (task) => {
     const id = tasks.length + 1;
     const meow = { id, ...task }
     setTasks([...tasks,meow])
 }
   return (
    <div className="container">
      <div className="header">
          <h1>Task Tracker</h1>
          <Button color="green" text="Add"/>
      </div>
        <Form onAdd = {addTask}/>
        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

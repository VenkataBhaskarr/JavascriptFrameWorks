import {FaTimes} from 'react-icons/fa'
function Tasks(props){
    // const [tasks , setTasks] = useState([
    //     {
    //       id: 1,
    //       name: 'Doctors Appointment',
    //       day: 'May 5th at 2:30pm',
    //       reminder: true,
    //     },
    //     {
    //       id: 2,
    //       name: 'Meeting at School',
    //       day: 'May 6th at 1:30pm',
    //       reminder: true,
    //     },
    //     {
    //       id: 3,
    //       name: 'Food Shopping',
    //       day: 'May 7th at 12:30pm',
    //       reminder: false,
    //     }
    // ])
    // const addTask = () => {
    //     // setTasks(tasks.push())
    // }
    // const deleteTask = (id) => { 
    //    setTasks(tasks.filter((task) => task.id !== id))
    // }
   return(
       <>
            {props.tasks.map((task) => (
             <>   
                 <div className="task">
                 <h3>{task.name}  <FaTimes style={{color: 'red'}} onClick = {() => props.onDelete(task.id)}/> </h3>
                 <p >{task.day}</p>
                 </div>
            </>
            ))}
       </>
   );
}
export default Tasks;
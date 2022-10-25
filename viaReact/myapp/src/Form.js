import {useState} from 'react'
function Form(props){
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd({name:text,day:day})
        setText('')
        setDay('')
    }
    return(
        <form onSubmit={onSubmit}>
                  <div className="form-control">
                      <label>Task</label>
                         <input
                             type="text"
                             name="text"
                             value={text}
                             onChange={(e) => setText(e.target.value)}
                             id="text"
                             placeholder="Add Task"
                         />
                  </div>
                 <div className="form-control">
                     <label>Day & Time</label>
                         <input
                             type="text"
                             name="day"
                             value={day}
                             onChange={(e) => setDay(e.target.value)}
                             id="day"
                             placeholder="Add Day & Time"
                          />
                 </div>
            <input type="submit" value="Save Task" className="btn btn-block add-form"/>

        </form>
    );
}
export default Form
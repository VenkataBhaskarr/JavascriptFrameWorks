import {useState} from 'react'
import axios  from 'axios';
function Form(){
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
     function onSubmit(e) {
         e.preventDefault();
       axios.post("http://localhost:5000/post" , {
           name : name,
         password : password
       }).then((res) => {console.log(res)})
     }
    return (
        <div>
            <form onSubmit={onSubmit}>
                  <h3>Login Here</h3>
                  <label for="username">Username</label>
                  <input type="text" placeholder="Email or Phone" value = {name} onChange={(e) => setName(e.target.value)}/>
                  <label for="password">Password</label>
                  <input type="password" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                  <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}

export default Form 
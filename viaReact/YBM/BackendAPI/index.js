const express = require('express')
const app = express()
const PORT = 5000
const users = [{
    'name'     : 'John',
    'password' : 'password'
}]


app.use(express.json());


app.get('/' , (req,res) => {
    res.send(users)
})

app.post('/post' , (req , res) => {
    const user = { ...req.body }
    users.push(user)
    // const user = {...req.body}
    res.send("success")
})

app.listen(PORT, () => console.log("up and running hell"))
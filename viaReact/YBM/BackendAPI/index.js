const express = require('express')
const app = express()
const PORT = 5000
const users = [{
    'name'     : 'John',
    'password' : 'password'
}]

app.get('/' , (req,res) => {
    res.send("hello world")
})

app.get('/post' , (req , res) => {
    
    res.send("kusalame")
})



app.post('/post' , (req,res) => {
    // const user = { ...req.body }
    // users.push(user)
    res.send("pushed succesfully")
})

app.listen(PORT, () => console.log("up and running hell"))
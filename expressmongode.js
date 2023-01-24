// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://raghavan20pw26:raghavan20pw26@assignment.wbcf3qb.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const express = require('express')
const bodyParser = require('body-parser')
const {createStudent,getAllStudents,getStudentByName}= require("./controller/controller")

// for parsing application/json
const app = express()
app.use(bodyParser.json()) 
const connection = require('./connection')
const model = require('./model')
app.get('/',(req,res)=>{
    res.json({'message':"hello"})
})
app.get('/findbyname/:name',getStudentByName)

app.get('/all',getAllStudents)
app.post('/',createStudent)
app.listen(8084,()=>{
    console.log("Server is on on 8084");
})

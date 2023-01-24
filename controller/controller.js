const userModel = require("../model")
// get all students
const getAllStudents = async (req,res)=>{
    const students = await userModel.find({}).sort({createdAt:-1})
    res.status(200).json(students);
}

//get one student
const getStudentByName = async(req,res)=>{
    const name  = req.params.name;
    const student = await userModel.findOne({'name':name}).sort({createdAt:-1});
    if(student){
        console.log("user found")
        return res.status(200).json(student)
    }
    else{
        return res.status(400).json({error:"no such student"})
    }
}

// create students

const createStudent = async (req,res)=>{
    const {name,marks} = req.body;
    try{
        const student = await userModel.create({name,marks});
        res.status(200).json(student);
    }catch(error){
        res.status(400).json({error:error.msg})
    }
}


module.exports ={
    createStudent,getAllStudents,getStudentByName
}
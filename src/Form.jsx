import React, { useState } from "react";

const students = [];

var inputStyle={borderRadius:'30px',padding:'10px' , backgroundColor:"whitesmoke", color:'Black' ,textAlign:"center",borderColor:'whitesmoke' };

const mainDiv =
{
    display: 'flex',
      alignItems:'center',
       height: '100vh' , 
       flexDirection:'column',
       justifyContent:'center'
} 


function Form()
{  

    //STATES
const [studentName,setName] = useState("");
const [studentNumber,setNumber] = useState("");

function updateStateOfName(event) //Functions updating states on the go
{
    setName(event.target.value);
    
}

function updateStateOfNum(event)
{
    setNumber(event.target.value);
}


function pushToArr() //pushing recieved data to array to be later rendered into a log 
{
    const current = new Date();

const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
   

});

console.log(time); 

alert("Checkin time is " + time)

let obj = 
{
//defining object
    sName:studentName,
    rollNo:studentNumber,
    checkInTime:time,
    checkOutTime:undefined,

};
 students.push(obj);
 setName("");
 setNumber("");
console.log(students);
}

var presentStudents = students.length;



    return(
    <div style={mainDiv}>
    <div class="form-div">
    <p style={{color:"E97A6E"}}>Welcome!</p>
    <span>{studentName}</span>
   <form >
   <input style={inputStyle} placeholder="Name" value={studentName} onChange={updateStateOfName}/>
    <div style={{height:"20px"}}></div>
    <input style={inputStyle} placeholder="Roll Number" value={studentNumber} onChange={updateStateOfNum}/>
   </form>
   <button type="submit" class="btn btn-outline-light" style={{width:160 , borderRadius:'20px'}} onClick={pushToArr}>Submit</button>
    </div>
   <i class="studentspresent">Number of students present:{presentStudents}</i> 
    </div>
)
}

export default Form ;

export {students};
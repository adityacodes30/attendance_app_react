import React from "react";
import { students } from "./Form";

// UNDER DEVELOPMENT 

function App2()
{


    function tableRow(student)
{
    return(<tr>
    <td>{student.sName}</td>
    <td>{student.rollNo}</td>
    <td>{student.checkInTime}</td>
    <td>{student.checkOutTime}</td>
    </tr>);
}
    return(<div style={{color:'white'}}>
        <table>
        <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Check-in</th>
            <th>Check out </th>
        </tr>
        {students.map(tableRow)}

        </table>
    </div>);
}

export default App2
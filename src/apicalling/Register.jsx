import React, { useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
function Register() {
    
    const[use,setuse]= useState([])
   
      axios.get('http://localhost:3000/user')
      .then((Responses)=>{
          console.log(Responses)
         setuse(Responses.data)

      })

    
  return (
    <div>
         
      
        {use.map((value)=>
         <Table striped bordered hover>
         <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>*</td>
          <td>{value.Name}</td>
          <td>{value.Email}</td>
          <td>{value.password}</td>
        </tr>
      </tbody>
    </Table>
    )}
    </div>
  )
}

export default Register
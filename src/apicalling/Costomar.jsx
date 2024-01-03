import React, { useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
function Costomar() {
      
    const[data,setdata]= useState([])
   
      axios.get('http://localhost:3000/cust')
      .then((Responses)=>{
          console.log(Responses)
         setdata(Responses.data)

      })

    
  return (
    <div>
        {data.map((value)=>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Adress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>#</td>
          <td>{value.Name}</td>
          <td>{value.Email}</td>
          <td>{value.Phone}</td>
          <td>{value.Adress}</td>

          <td></td>
        </tr>
        
         
      </tbody>

    </Table>
        )}
    </div>
    
  )
}

export default Costomar
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table} from 'react-bootstrap'

function Apiadmin() {
    const[bat,setbat]= useState([])
    function fetchAll(){
      axios.get('http://localhost:3000/sat')
      .then((Responses)=>{
          console.log(Responses)
         setbat(Responses.data)

      })

    }
    useEffect(()=>{
   
       
fetchAll()
    },[])
  return (
    <div>
{bat.map((car)=>
         <Table responsive>
      <thead>
        <tr>
          <th>Brand name</th>
         
            <th >Modal name</th>
            <th>Manufacture year</th>
          <th>Spare parts</th>
          <th>spare price</th>
          <th>after market spare</th>
          <th>Modal image</th>
          <th>spare parts image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{car.Brandname}</td>
          
            <td >{car.Modalname} </td>
          <td>{car.Manufactureyear}</td>
          <td>{car.Spareparts}</td>
          <td>{car.Spareprice}</td>
          <td>{car.Aftermarketspare}</td>
          <td> {car.Brandimage}</td>
          <td>{car.Modalimage}</td>
          <td>{ car.Sparepartsimage}</td>
        <td><RemoveItem id={car._id} fetchAll={fetchAll}/></td>
        </tr>
        {/* <tr>
          <td></td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}> {index}</td>
          ))}
        </tr>
        <tr>
          <td></td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}> {index}</td>
          ))}
        </tr> */}
      </tbody>
    </Table>
    )}
    </div>
  )
}


function RemoveItem({id,fetchAll}){
  async function handleDelete(){
    await axios.delete("http://localhost:3000/jet/"+id)
    fetchAll()
  }
  return <button  style={{backgroundColor:"ButtonFace"}} onClick={handleDelete}>Delete</button>
}

export default Apiadmin
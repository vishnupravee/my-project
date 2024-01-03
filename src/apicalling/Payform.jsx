import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router'

function Payform() {
    const {Spareparts}= useParams()
  // console.log(brandname);
  const[nar,setnar]= useState([])
  useEffect(()=>{
 
      axios.get(`http://localhost:3000/paid/${Spareparts}`)
      .then((Responses)=>{
        setnar(Responses.data);

      })

  },[])
  // const{Modalimage}=useParams()
  // const currentdata=mat[Modalimage]
  console.log(nar);
  return (
    <div>
      <p  style={{marginLeft:"20px"}}>Product Details</p>
        {nar.map((value)=>
        <div>
          
        <img style={{width:"80px",marginLeft:"20px",height:"90px"}} src={value.Sparepartsimage}/>
        <p style={{marginLeft:"20px",marginTop:"10px"}}><Button variant="light"> Totel Amount:{value.Spareprice}</Button></p>
        
        </div>
        )}

    </div>
  )
}

export default Payform
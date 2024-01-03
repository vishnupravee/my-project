import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

function Viewcart() {
    
    // console.log(brandname);
    const[kart,setkart]= useState([])
    useEffect(()=>{
   
        axios.get(`http://localhost:3000/kart`)
        .then((Responses)=>{
          setkart(Responses.data);

        })

    },[])
   
    console.log(kart);
  return (
    <div>
        {kart.map((main)=>
 <Card style={{ width: '18rem', marginBottom:"30px",marginLeft:"30px" }}>
    <Card.Title>PRODUCT DETAILS</Card.Title>
      <Card.Img variant="top" src={main.Sparepartsimage} />
      <Card.Body>
        <Card.Text>
          RATE:{main.Spareprice}Rs
        </Card.Text>
        <Button variant="warning" href='/buy/:Spareparts'>Buy now</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default Viewcart
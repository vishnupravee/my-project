import React from 'react'
import { Button, Card } from 'react-bootstrap'
import{FaMedal}from 'react-icons/fa'
import{ MdOutlinePayments }from 'react-icons/md'
import{ BsGearWideConnected } from 'react-icons/bs'
import './Aftermarket.css'
function Aftermarket() {
    const obj=[{image:<FaMedal />,name:"Orjinal Product",address:"Only reliable parts from trusted Aftermarket brands"},
    {image:<MdOutlinePayments />,name:"Affordable Rates",address:"Repairing a damaged vehicle can be expensive. Using the aftermarket products is a good solution if you're on a budget"},
{image:<BsGearWideConnected />,name:"Wide variety",address:"We have something for everyone when it comes to aftermarket products. Just apply the  filter in the catalogue" 
}]
  return (
    <div>
        <div className='sag'>
        <h2 style={{marginLeft:"20px",paddingTop:"10px"}}><span>Why Choose </span> <span style={{color:"brown"}}>Aftermarket Product?</span></h2>    
        </div>
        {obj.map((value)=>
        <Card className='sar' style={{ width: '18rem' }}>
      
      <Card.Body >
        <Card.Title  style={{fontSize:'70px',textAlign:"center"}}>{value.image}</Card.Title>
        <Card.Text style={{marginTop:"60px"}}>
            <h3>{value.name}</h3>
         <p>{value.address}</p> 
        </Card.Text>
        
      </Card.Body>
    </Card> 
    )}
    </div>
  )
}

export default Aftermarket
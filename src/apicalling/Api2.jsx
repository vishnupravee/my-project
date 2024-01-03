
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
function Api2() {
    const {Modalname}= useParams()
    // console.log(brandname);
    const[mar,setmar]= useState([])
    useEffect(()=>{
   
        axios.get(`http://localhost:3000/sparget/${Modalname}`)
        .then((Responses)=>{
          setmar(Responses.data);

        })

    },[])
    // const{Modalimage}=useParams()
    // const currentdata=mat[Modalimage]
    console.log(mar);
  return (
    <div>
       

    <div className=''>
      <div className=''>
        <h2 style={{marginLeft:"20px",paddingTop:""}}><span>Genuine</span> <span style={{color:"blueviolet"}}>parts</span></h2>
      </div>
        {mar.map((val)=>
        
        <div style={{marginTop:'100px',height:"500px"}} className='row'>
     
     <Card style={{ width: '30rem',borderColor:"darkblue"}}>
      <Card.Img title='100% genuine' style={{height:"200px",borderRadius:"25px",marginLeft:"20px",width:"20rem"}} variant="top" src={val.Sparepartsimage} />
      <Card.Body>
        
        <Card.Title>{val.Spareparts}</Card.Title>
        <Card.Text> {val.Spareprice}</Card.Text>
        <Card.Text > {val.Sparedetails}</Card.Text>
        </Card.Body>
        <div style={{marginBottom:"20px"}}>
        <Link to={`/jar/${val.Spareparts}`}><Button style={{width:"200px"}} variant="primary">Add To Cart</Button></Link>  <Link to={`/buy/${val.Spareparts}`}><Button   style={{marginLeft:"30px",width:"200px"}} variant="warning">Buy Now</Button></Link>
        </div>
        </Card>
      
        
          
        
    
     


            </div>
        
        
        )}
      

    </div>
    
  

  



    </div>
  )
}

export default Api2
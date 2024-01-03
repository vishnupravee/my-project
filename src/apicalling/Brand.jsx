import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './Brand.css'
function Brand() {

  return (
    <div>
        <div className='dat'>
        <h2 style={{marginLeft:"20px",paddingTop:"10px"}}><span>Brands We </span> <span style={{color:"forestgreen"}}>Trust</span></h2>   
        </div>
        
          <Card style={{ width: '100%',marginTop:'30px' }}>
     
      <Card.Body style={{marginLeft:"30px",marginTop:"40px"}}>
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/1586c06.webp" />
      <Card.Img  style={{height:"60px",width:"90px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/1ce986d.webp" /> 
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/623b018.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/f50f113.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/ff1cc61.webp" />
      <Card.Img  style={{height:"60px",width:"90px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/987fd20.webp" />
      <Card.Img style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/6d1831f.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/10a8568.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/551a859.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px"}} src="https://boodmo.com/media/images/brand/e5b18f5.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px",marginTop:"40px"}} src="https://boodmo.com/media/images/brand/7fab5d4.webp" />
      <Card.Img  style={{height:"60px",width:"80px",marginLeft:"30px",marginTop:"40px"}} src="https://boodmo.com/media/images/brand/669cf6a.webp" /> 
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Brand
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Karosal.css'
 
function Karosal() {
  return (
    <div>
      <div className='mag'>
      <h2 style={{marginLeft:"20px",paddingTop:"10px",float:"left"}}><span>Current</span> <span style={{color:"darkcyan"}}>Offers</span></h2>
      </div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="100">
      <img style={{width:"100%",height:"600px"}} src="https://lrlmotors.com/cdn/shop/files/ONLINE_POSTER_2.jpg?v=1654928104"   class="d-block  " alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img style={{width:"100%",height:"600px"}} src="https://pbs.twimg.com/media/EtYVznsU0AE7Cx5.jpg" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{width:"100%",height:"600px"}} src="https://www.shopee365.com/media/codazon/slideshow/cache/1920x730/c/a/car-auto-parts-online-at-lowest-price.jpg" class="d-block  " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Karosal
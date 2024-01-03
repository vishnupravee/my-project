
import React from 'react'
import { Button, Card} from 'react-bootstrap'

import { AiTwotoneLike } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import swal from 'sweetalert';
function Payment() {
  const checkdata=()=>{
    swal("Good job!", "Order Confirmed", "success");
  }
  // const {Spareparts}= useParams()
  // // console.log(brandname);
  // const[nar,setnar]= useState([])
  // useEffect(()=>{
 
  //     axios.get(`http://localhost:3000/paid/${Spareparts}`)
  //     .then((Responses)=>{
  //       setnar(Responses.data);

  //     })

  // },[])
  // // const{Modalimage}=useParams()
  // // const currentdata=mat[Modalimage]
  // console.log(nar);
  return (
    
    <div >
      {/* {nar.map((val)=> */}
       
        <div style={{marginTop:"100px",marginLeft:"40px"}}>
            <h3>payment option</h3>
        
     <div style={{width:"600px",marginLeft:"80px",marginTop:"40px"}}/>
        <div style={{marginTop:"20px"}}/>
      
        <input type="radio" id="html"  />
        <label for="html"> UPI</label><br></br>
      
      
      
       <div style={{marginTop:"20px"}}/>
      
       <input type="radio" id="html"  />
        <label for="html"> Wallet</label><br></br>
        
      
      
     <div style={{marginTop:"20px"}}/>
     <input type="radio" id="html"      />
        <label for="html"> Credit/Debit/ATM Card</label><br></br>
      
      <div style={{marginTop:"20px"}}/>
      
      <input type="radio" id="html"  />
        <label for="html">Net Banking</label><br></br>
        
      
      <div style={{marginTop:"20px"}}/>
      
      <input type="radio" id="html"  />
        <label for="html"> EMI(Easy installments)</label><br></br>
        
      
      <div style={{marginTop:"20px"}}/>
      
      <input type="radio" id="html"  />
        <label for="html"> Cash on Delivery</label><br></br>
      
     
      <div style={{marginTop:"30px"}}>
        
        </div >
        <div style={{float:"left",marginLeft:"60px"}}>

        <Card style={{ width: '18rem' }}>
          <div style={{textAlign:"center",fontSize:"30px"}}>
      <AiTwotoneLike />
      </div>
      <Card.Body >
        <Card.Title style={{textAlign:"center"}}>Authentic Product</Card.Title>
        
        
      </Card.Body>
    </Card>
    </div>

      <div style={{float:"left",marginLeft:"60px"}} >
    <Card style={{ width: '18rem' }}>
      <div style={{textAlign:"center",fontSize:"30px"}}>
    <RiSecurePaymentFill />
    </div>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}} >Secure Payments</Card.Title>
        
        
      </Card.Body>
    </Card>
    </div>
    <div style={{float:"left",marginLeft:"60px"}}>
    <Card style={{ width: '18rem', }}>
      <div style={{textAlign:"center",fontSize:"30px"}}>
    <TbTruckReturn />
    </div>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}} >Easy Returns</Card.Title>
        
        
      </Card.Body>
    </Card>
    </div>

    </div>
        
    <div  style={{marginTop:"200px",marginLeft:"20px"}}>
    
      <Card.Img style={{height:"60px",width:"100px",marginTop:"px"}} variant="top" src="https://e7.pngegg.com/pngimages/840/663/png-clipart-brand-logo-visa%E3%81%AE%E3%83%88%E3%83%83%E3%83%97%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E6%88%A6%E7%95%A5-product-trademark-visa-gemstone-blue.png" />
      <img style={{height:"60px",width:"100px",marginLeft:"140px",marginBottom:"px"}} variant="top" src="https://zeevector.com/wp-content/uploads/Mastercard-Emblem-PNG-VECTOR.png" />
      <img style={{height:"80px",width:"100px",marginLeft:"140px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png'/>
      <img style={{height:"50px",width:"140px",marginLeft:"140px"}} src='https://w7.pngwing.com/pngs/382/146/png-transparent-american-express-logo-icons-logos-emojis-iconic-brands.png'/>
      <img style={{height:"60px",width:"100px",marginLeft:"140px",marginBottom:"px"}}  variant="top" src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" />
    
     
      
   
    </div>
    
    <div>
    <Card.Body>
     <h4 style={{marginTop:"50px",marginLeft:"50px"}}>Clicking on "continue" will procced your order</h4> <Button style={{marginTop:"50px",float:"right",marginRight:"20px",marginBottom:"30px"}} variant='warning' onClick={checkdata}>Continue</Button>
     </Card.Body>
    </div>
     
    </div>
    
      
  
      )}

export default Payment
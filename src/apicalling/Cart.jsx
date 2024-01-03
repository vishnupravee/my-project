import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Cart() {
  const { Spareparts } = useParams()
  // console.log(brandname);
  const [mar, setmar] = useState([])
  const [Sparepartsimage, setSparepartsimage] = useState("")
  const [Spareprice, setSpareprice] = useState("")
  useEffect(() => {

    axios.get(`http://localhost:3000/paid/${Spareparts}`)
      .then((Responses) => {
        setmar(Responses.data);
    

      })

  }, [])

console.log(mar);
  const changebata =async() => {
// e.preventDefault();
    try {

    
      setSpareprice(mar[0].Spareprice)
      setSparepartsimage(mar[0].Sparepartsimage)
      const config = {
        headers: {
          "content-type": "application/json"
        },
      }
      console.log(Spareprice,Sparepartsimage+'onclick event');
      const data = await axios.post("http://localhost:3000/chart",{Sparepartsimage,Spareprice },config)
      // console.log('click event');
      console.log(data)
      //   Navigate("/main")
    } catch (error) {
      console.log("could not sign up", error)


    }
  }
  return (
    <div>
      <p style={{ marginLeft: "20px" }}>Product Details</p>
      {mar.map((val,i) =>
        <div key={i}>
          <Form>
            <Form.Group className="bar" controlId="formBasicEmail">
              <Form.Label>Spareparts image</Form.Label>
              <Form.Control type="text" value={val.Sparepartsimage} />



            </Form.Group>

            <Form.Group className="bar" controlId="formBasicPassword">
              <Form.Label>Spareprice</Form.Label>
              <Form.Control type="text" value={val.Spareprice}  />
            </Form.Group>
          </Form>
          <Button variant="warning"  style={{ float: "right", marginRight: "20px", }} onClick={changebata} >
            Add
          </Button>
        </div>
      )}
    </div>
  )
}

export default Cart
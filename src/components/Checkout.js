import * as React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Address from "./Address";
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartCard } from './CartCard'; 
import Button from "@mui/material/Button";


export default function Checkout({cartItem,itemCount}){
    return(
        <div className='mt-5'>
            <Row>
                <Col sm={8}>
                    <Address />
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col sm={12}>
                    <FinalCart itemCount={itemCount}cartItem={cartItem}/>
                    </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={12} >
                    Payment
                </Col>
            </Row>
        </div>
    )
}



export function FinalCart({cartItem,itemCount}){
    
return(
   <div>
    
  <Card style={{marginRight:"60px"}}>
      <Card.Header className="cartheading" as="h4">Checkout</Card.Header>
     <ListGroup variant="flush" className="cart_item">
    {cartItem.map((item)=>(  <ListGroup.Item>
        <div className="finalCart">
            {/* <Row> */}
            <Col sm={4}>
                <p style={{fontSize:"20px"}}>{item.name}</p>
                </Col>
            <Col sm={4}>
                <p style={{textAlign:"end"}}>{item.qty} x {item.quantitydisplay}</p>
                </Col>
                <Col sm={4}>
                <p style={{textAlign:"end",fontSize:"20px"}}>₹ {item.qty*item.price}.00</p>
                </Col>
                {/* </Row> */}
                </div>
                </ListGroup.Item>))}
    {<ListGroup.Item className="total_item"><p>Total </p><p>₹ {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))}.00</p></ListGroup.Item>}
    <ListGroup.Item> <Button variant="contained">Pay</Button></ListGroup.Item>
      </ListGroup>
     
    </Card>
   </div>
)

}
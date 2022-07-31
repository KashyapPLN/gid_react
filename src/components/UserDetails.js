import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "bootstrap";
import { useState } from 'react'
import Address from "./Address";
import Orders from "./Orders";
import Footer from "./Footer";
export default function UserDetails(){
    const [addressPage,setAddressPage] = useState(false);
    const [ordersPage,setOrdersPage] = useState(false);
    const [displayPastOrders,setDisplayPastOrders] = useState(false);
    const [displayCurrentOrders,setDisplayCurrentOrders] = useState(false);
    const displayAddress = ()=>{
        setAddressPage(true);
        setOrdersPage(false);
    }
    const displayOrdersPage = ()=>{
        setOrdersPage(true);
        setAddressPage(false);
        setDisplayPastOrders(true);
        setDisplayCurrentOrders(true);
    }
   const currentOrdersDisplay = () => {
    
    setDisplayCurrentOrders(true);
    setDisplayPastOrders(false);
     }
     const pastOrdersDisplay = () => {
       
        setDisplayPastOrders(true);
        setDisplayCurrentOrders(false);
     }
    return(
        <div className="mt-5">
<Row>
    <Col sm={4}>      
<Container>
<Row>
        <Col sm={12}>
        <ListGroup defaultActiveKey="/user/addresses">
      <ListGroup.Item action onClick={displayAddress}>
       My Addresses
      </ListGroup.Item>
      <ListGroup.Item action onClick={displayOrdersPage} >
      My Orders
      </ListGroup.Item>
     { ordersPage===true ? <ListGroup.Item action onClick={pastOrdersDisplay}>
        Past Orders
      </ListGroup.Item> : null} 
      { ordersPage===true ?  <ListGroup.Item action onClick={currentOrdersDisplay}>
        Current Orders
      </ListGroup.Item> : null} 
    </ListGroup>
        </Col>
</Row>
</Container>
</Col>
<Col sm={8}>      
<Container>
<Row>
 <Col sm={12}>
   { addressPage===true ?<Address /> :null}
   { ordersPage===true ?<Orders displayCurrentOrders={displayCurrentOrders} displayPastOrders={displayPastOrders} /> :null}
    </Col>
      </Row>
</Container>
</Col>
</Row>
<Footer />
</div>
    )
}
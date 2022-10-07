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
import ResetPassword from "./ResetPassword";
import UpdateUserMobile from "./UpdateUserMobile";
export default function UserDetails({userName1,orderId,setOrderId,uId}){
    const [addressPage,setAddressPage] = useState(true);
    const [ordersPage,setOrdersPage] = useState(false);
    const [displayOrders,setDisplayOrders] = useState(false);
    const [passwordResetPage,setPasswordResetPage] = useState(false)
   const [updateDetails,setUpdateDetails] = useState(false);
    const displayAddress = ()=>{
        setAddressPage(true);
        setOrdersPage(false);
        setPasswordResetPage(false);
        setUpdateDetails(false);
    }
    const displayOrdersPage = ()=>{
        setOrdersPage(true);
        setAddressPage(false);
        setDisplayOrders(true);
        setPasswordResetPage(false);
        setUpdateDetails(false);
    }
 const displayPasswordPage = () => {
    
 setPasswordResetPage(true);
   setDisplayOrders(false);
   setAddressPage(false);
   setOrdersPage(false);
   setUpdateDetails(false);

    }
  const displayUpdateDetails=() =>{
    setPasswordResetPage(false);
    setDisplayOrders(false);
    setAddressPage(false);
    setOrdersPage(false);
    setUpdateDetails(true);
  }
     const allOrdersDisplay = () => {
       
        setDisplayOrders(true);
        // setDisplayCurrentOrders(false);
     }
    return(
        <div className="mt-5"style={{paddingBottom: '200px'}}>
<Row>
    <Col sm={4}>      
<Container >
<Row>
        <Col sm={12}>
        <ListGroup style={{textAlign:'end', width:'300px',marginLeft:'200px'}} defaultActiveKey="/user/addresses">
      <ListGroup.Item style={{fontWeight:"bold"}} action onClick={displayAddress}>
       My Address
      </ListGroup.Item>
      <ListGroup.Item style={{fontWeight:"bold"}} action onClick={displayOrdersPage} >
      My Orders
      </ListGroup.Item>
      <ListGroup.Item style={{fontWeight:"bold"}} action onClick={displayPasswordPage}>
        Reset Password
      </ListGroup.Item>
      <ListGroup.Item style={{fontWeight:"bold"}} action onClick={displayUpdateDetails}>
        Update Phone Number
      </ListGroup.Item>
    </ListGroup>
        </Col>
</Row>
</Container>
</Col>
<Col sm={8}>      
<Container>
<Row>
 <Col sm={12}>
   { addressPage===true ?<Address userName1={userName1} uId={uId}/> :null}
   { ordersPage===true ?<Orders  displayOrders={displayOrders} userName1={userName1} uId={uId} orderId={orderId} setOrderId={setOrderId}/> :null}
   { passwordResetPage===true ?<ResetPassword uId={uId}/>: null}
   {updateDetails===true?<UpdateUserMobile uId={uId}/>:null}
    </Col>
      </Row>
</Container>
</Col>
</Row>
<Footer />
</div>
    )
}
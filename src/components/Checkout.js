import * as React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Address from "./Address";
import { useState,useContext,useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartCard } from './CartCard'; 
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GooglePayButton from '@google-pay/button-react';
import OrderConfirmation from './OrderConfirmation';
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import Footer from './Footer';

export default function Checkout({cartItem,itemCount,setItemCount,setCartItem,userName1,uId}){
    const [payment, setPayment] = useState(false);
    const [proceed,setProceed] =useState(false);
    const receivedData = (data) => {
        console.log('data from addr',data);
        setProceed(data);
    }
    return(
        <div className='mt-5 '>
            <Row>
                <Col sm={7}>
                    <div style={{marginLeft:'200px'}}>
                    <Address userName1={userName1} uId={uId} parentCallback = {receivedData}/>
                    </div>
                </Col>
                <Col sm={5}>
                    <Row>
                        <Col sm={12}>
                    {itemCount>0 ? <FinalCart itemCount={itemCount}cartItem={cartItem} proceed={proceed}  setPayment={setPayment}/>: null}
                    </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={12} >
                {itemCount>0 && uId!='' ? <Payment itemCount={itemCount}cartItem={cartItem} setItemCount={setItemCount} setCartItem={setCartItem} payment={payment} userName1={userName1} uId={uId}/>: null}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}



export function FinalCart({cartItem,setPayment,proceed}){


 
return(
   <div>
    
  <Card className="checkout_cart">
      <Card.Header className="cartheading" as="h4">Checkout</Card.Header>
     <ListGroup variant="flush" className="cart_item">
    {cartItem.map((item)=>(  <ListGroup.Item>
      <div className="finalCart">
            {/* <Row> */}
            <Col sm={4}>
             <p style={{fontSize:"16px"}}>{item.name}</p>
                </Col>
            <Col sm={4}>
                <p style={{textAlign:"end"}}>{item.qty} x {item.quantitydisplay}</p>
                </Col>
                <Col sm={4}>
                <p style={{textAlign:"end",fontSize:"16px",marginLeft:"20px"}}>₹ {item.qty*item.price}.00</p>
                </Col>
                {/* <Col sm={2}>
                    
                {/* </Row> */}
                </div>
                </ListGroup.Item>))}
    {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))>0 ? <ListGroup.Item className="total_item"><p>Total </p><p>₹ <span id="total_amt">{(cartItem.reduce((total, item) => total + item.qty * item.price, 0))}</span>.00</p></ListGroup.Item>:null}
    {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))>0 ?  <ListGroup.Item>
         <Button variant="contained" color="success" onClick={() => {
           if(proceed==true){ setPayment(true);}}}>Proceed to Payment</Button></ListGroup.Item> : <div><p className="emptycart mt-4">Your Cart is Empty</p><p className="fillcart"><AddShoppingCartIcon /></p></div>}
      </ListGroup>
     {proceed==false ? <p style={{color:'red'}}>Please add address to proceed to payment</p>:null}
    </Card>
    
   </div>
)

}

export function Payment({cartItem,itemCount,setItemCount,setCartItem,payment,userName1,currentOrder,setCurrentOrder,uId}){
    const [paymentStatus,setPaymentStatus] = useState(400);
    // const [order,setOrder]=useState({});
    const navigate=useNavigate();
    
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)
    function deleteCart(){
        fetch(`http://localhost:4000/cart/${uId}_cart`,{method:'DELETE'})
        .then((data)=>data.json())
         .then((res)=>console.log(res,'deleted'))

    }
   
   function createOrder(){
    const orderDetails ={
        "userName" : uId,
        "_id" : small_id,
        "orderItem": cartItem,
        "orderDateTime" : Date().toLocaleString()
    };
//    setCurrentOrder(order._id);  
     fetch("http://localhost:4000/user/orders",{
        method : 'POST',
         body :JSON.stringify(orderDetails),
       headers:{ 'Content-Type': 'application/json',
                 'Accept' : 'application/json' }
       }).then((data)=>data.json())
    .then((d)=>console.log("order successfully created",d))
    
    // navigate('/orderconfirmation');
}
  

 const totalAmt = (cartItem.reduce((total, item) => total + item.qty * item.price, 0)).toString();
 console.log("total is",totalAmt)
console.log(payment);
console.log(paymentStatus);
    return (<div className="paymentGW">
        
       {/* <p>{(cartItem.reduce((total, item) => total + item.qty * item.price, 0))}</p> */}
    {payment===true ?  
      <GooglePayButton 
       environment='TEST'
       paymentRequest={{
        apiVersion : 2,
        apiVersionMinor : 0,
        allowedPaymentMethods : [
            {
                type:'CARD',
                parameters:{
                    allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
                    allowedCardNetworks:['MASTERCARD','VISA'],
                    
                },
                tokenizationSpecification : {
                    type :'PAYMENT_GATEWAY',
                    parameters:{
                        gateway:'example',
                        gatewayMerchantId :'exampleGatewayMerchantId',
                    },
                },
            },
        ],
        merchantInfo:{
            merchantId : '12345678901234567890',
            merchantName : 'Demo Merchant',
        },
        transactionInfo : {
            totalPriceStatus:'FINAL',
            totalPriceLabel:'Total',
            totalPrice:  totalAmt,
            currencyCode:'INR',
            countryCode:'IN'
        },
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
            
       }}
       onLoadPaymentData={paymentRequest=>{console.log('load payment data',paymentRequest);}}
       onPaymentAuthorized={paymentData => {
    createOrder();
        // setPaymentStatus(200);
        deleteCart();
        setItemCount(0);
        setCartItem([]);
        navigate('/orderconfirmation');
        console.log('Payment Authorised Success', paymentData);
        return { transactionState: 'SUCCESS'}
      }}
       
      />
     : null}

     {/* {paymentStatus===200 ? <OrderConfirmation/>: null}  */}
        </div>)
}



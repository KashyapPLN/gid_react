 import * as React from "react";
 import ListGroup from "react-bootstrap/ListGroup";
 import Card from "react-bootstrap/Card";
 import Button from "@mui/material/Button";
import { IncDecCounter } from "./IncDecCounter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState,useEffect} from "react";




 export function CartCard({handleInc,handleDec,itemCount,cartItemDisplay,cartItem,setCartItemDisplay,userId,uId}) {

  const navigate=useNavigate();
const [show,setShow]=useState(false);

return (
  
   <div className="cart">
     <Card >
         <Card.Header className="cartheading" as="h4">Your Cart</Card.Header>
        <Card.Body >
         
           <Card.Text >
           <ListGroup  >
            
                 


{
cartItemDisplay === true && itemCount > 0

                  ?  
                  cartItem.map((item)=>( <ListGroup.Item className="cart_item" >
                        
                     {item.name}    
                     {/* <IconButton id={item.name} value={item.name} sx={{marginLeft:"20px"}} variant='contained'color='error' onClick={()=>removeItem(item)}><DeleteIcon /></IconButton> */}
                
                      <IncDecCounter  handleInc={()=>handleInc(item)} handleDec={()=>handleDec(item)} itemCount={item.qty}  />
                      <p className="price"> Price : ₹ {item.qty*item.price}.00 </p>
                      {/* <hr/> */}
                       </ListGroup.Item>))
                   
                  : null}


{(cartItem.reduce((total, item) => total + item.qty * item.price, 0))>0 ? <ListGroup.Item style={{border:0}} className="total_item mt-4"><p>Total </p><p>₹ {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))}.00</p></ListGroup.Item> : null}
             
             </ListGroup>
             
           </Card.Text>
          
           {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))>0  ?  <Button className='mt-3'color="success" variant="contained" onClick={()=>{if(uId!=""){navigate('/checkout');}else{setShow(true)}}}>Checkout</Button> 
           : <div><p className="emptycart">Your Cart is Empty</p><p className="fillcart"><AddShoppingCartIcon /></p></div>}
          
        
         </Card.Body>
   
       </Card>
       <ToastContainer position="top-end"className="toastmsg " style={{marginRight:"40px",marginTop:"85px"}} >

{show===true ? <Toast onClose={() => setShow(false)} show={show} bg="danger" delay={3000} autohide>
    <Toast.Header>
      
      <strong className="me-auto">Please Login to Checkout</strong>
  
    </Toast.Header>
    
  </Toast> :
  null}
  </ToastContainer>

     </div>

   );
 }
 

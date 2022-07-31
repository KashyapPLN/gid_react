 import * as React from "react";
 import ListGroup from "react-bootstrap/ListGroup";
 import Card from "react-bootstrap/Card";
 import Button from "@mui/material/Button";
import { IncDecCounter } from "./IncDecCounter";
import { useNavigate } from "react-router-dom";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from "react";




 export function CartCard({handleInc,handleDec,itemCount,cartItemDisplay,cartItem}) {
  const navigate=useNavigate();


;

   return (
  
   <div className="cart">
     <Card>
         <Card.Header className="cartheading" as="h4">Your Cart</Card.Header>
        <Card.Body>
         
           <Card.Text>
           <ListGroup>
            
                 


{cartItemDisplay === true && itemCount > 0
                  ?  
                  cartItem.map((item)=>( <ListGroup.Item className="cart_item">
                        
                     {item.name}    
                      <IncDecCounter  handleInc={()=>handleInc(item)} handleDec={()=>handleDec(item)} itemCount={item.qty}  />
                      <p className="price"> Price : ₹ {item.qty*item.price}.00 </p>
                       </ListGroup.Item>))
                   
                  : null}


{(cartItem.reduce((total, item) => total + item.qty * item.price, 0))>0 ? <ListGroup.Item className="total_item"><p>Total </p><p>₹ {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))}.00</p></ListGroup.Item> : null}
             
             </ListGroup>
             
           </Card.Text>
          
           {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))>0  ?  <Button color="success" variant="contained" onClick={()=>{navigate('/checkout');}}>Checkout</Button> 
           : <div><p className="emptycart">Your Cart is Empty</p><p className="fillcart"><AddShoppingCartIcon /></p></div>}
          
        
         </Card.Body>
   
       </Card>
     </div>

   );
 }
 

import * as React from "react";
import Card from 'react-bootstrap/Card'
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from "react";
function MainMenuCard({item,handleAddToCart,removeButton,removeItem,itemCount,userId,uId}){
    const {name,price,pic,category,quantitydisplay}=item;
    const [show,setShow]=useState(false);   
    
return(
<div>
<Card className="centerMenu mb-5">
  <Card.Header as="h5">{name}</Card.Header>
  <Card.Body>
  <Row>
    <Col sm={8}>
<img className="category"src={category} alt='category'/>
  <p className="item_price">Price : ₹ {price}.00</p>
<p className="item_quantity">Quantity : {quantitydisplay}</p>
</Col>
<Col sm={4}>
<div className="item_pic_disp"><img className="item_pic"src={pic} alt={name}/></div>


<div className="btn_disp"><Button onClick={()=>{if(uId!==""){handleAddToCart(item);}else{setShow(true); window.scrollTo(0, 0)}}} variant="contained">Add to Cart</Button></div>
</Col>
</Row>
</Card.Body>
</Card>
<ToastContainer position="top-end"className="toastmsg " style={{marginRight:"40px",marginTop:"85px"}} >

{show===true ? <Toast onClose={() => setShow(false)} show={show} bg="danger" delay={3000} autohide>
    <Toast.Header>
      
      <strong className="me-auto">Please Login to add items to the cart</strong>
  
    </Toast.Header>
    
  </Toast> :
  null}
  </ToastContainer>
</div>)

}
export default MainMenuCard;
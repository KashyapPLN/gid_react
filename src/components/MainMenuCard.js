import * as React from "react";
import Card from 'react-bootstrap/Card'
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainMenuCard({item,handleAddToCart,removeButton,removeItem,itemCount}){
    const {id,name,price,pic,category,type,quantitydisplay}=item;
    
    
return(
<div>
<Card className="centerMenu mb-5">
  <Card.Header as="h5">{name}</Card.Header>
  <Card.Body>
  <Row>
    <Col sm={8}>
<img className="category"src={category} />
  <p className="item_price">Price : ₹ {price}.00</p>
<p className="item_quantity">Quantity : {quantitydisplay}</p>
</Col>
<Col sm={4}>
<div className="item_pic_disp"><img className="item_pic"src={pic} /></div>


<div className="btn_disp"><Button onClick={()=>handleAddToCart(item)} variant="contained">Add to Cart</Button></div>
</Col>
</Row>
</Card.Body>
</Card>
</div>)

}
export default MainMenuCard;
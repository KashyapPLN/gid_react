import Button from '@mui/material/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from "react";

export function Search({ item,itemCount,setItemCount,cartItem,setCartItem,userId,uId }) {

const { id, name, price, pic, category, type, quantitydisplay } = item;
const [show,setShow]=useState(false);  
const cartObj = {
  "_id" : `${uId}_cart`,
  "item": cartItem}
async function createCart(){

await fetch("http://localhost:4000/cart",{
  method : 'POST',
  body :JSON.stringify(cartObj),
 headers:{ 'Content-Type': 'application/json',
           'Accept' : 'application/json' }
}).then((data)=>data.json())
.then((d)=>console.log("successfully created",d))
}
async function cartInDb(){
await fetch(`http://localhost:4000/cart/${userId}_cart`,{
  method : 'POST',
  body :JSON.stringify(cartItem),
 headers:{ 'Content-Type': 'application/json',
           'Accept' : 'application/json' }
}).then((data)=>data.json())
.then((d)=>console.log("successful",d))

}
  const handleAddToCart=(e)=>{
    console.log("the req val is",e.target.value)
    const exists = cartItem.some(v => (v.name === item.name ));
console.log(exists);
  if(!exists){
    // console.log(item.value);

   item.qty=item.qty+1;
 cartItem.push(item);
    setCartItem([...cartItem]);

    setItemCount(itemCount + 1);
 
  }
  else{

    console.log("Hello World");
    const addedItem=findArrayElementByName(cartItem,item.name);
    addedItem.qty=addedItem.qty+1;
    cartItem.push();
    setCartItem([...cartItem]);

  // console.log("Search"+item)
}

fetch(`http://localhost:4000/cart/${userId}_cart`,{
  method : 'POST',
   body :JSON.stringify(cartItem),
  headers:{ 'Content-Type': 'application/json',
           'Accept' : 'application/json' }
  }).then((data)=>data.json())
  .then((d)=>console.log("successful",d))
createCart();
if(cartObj){
cartInDb();
}

  }
  function findArrayElementByName(array, name) {
    return array.find((element) => {
      return element.name === name;
    })
  }
 
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={5}>
          <Card className="centerMenu mt-5">
            <Card.Header as="h5">{name}</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <img className="category" src={category} />
                  <p className="item_price">Price : ₹ {price}</p>
                  <p className="item_quantity">Quantity : {quantitydisplay}</p>
                </Col>
                <Col sm={4}>
                  <div className="item_pic_disp"><img className="item_pic" src={pic} /></div>
                  <div className="btn_disp"><Button value={name} onClick={(e)=>{if(userId!="anonymous"){handleAddToCart(e)}else{setShow(true)}}} variant="contained">Add to Cart</Button></div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
      <ToastContainer position="top-end"className="toastmsg " style={{marginRight:"40px",marginTop:"85px"}} >

{show===true ? <Toast onClose={() => setShow(false)} show={show} bg="danger" delay={3000} autohide>
    <Toast.Header>
      
      <strong className="me-auto">Please Login to add items to the cart</strong>
  
    </Toast.Header>
    
  </Toast> :
  null}
  </ToastContainer>
    </div>
  );










}

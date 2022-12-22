import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { API } from '../global';
function Cards({homemenu,cartItem,setCartItem,itemCount,setItemCount,userId,uId})
 {
  const [isShown, setIsShown] = useState(false);
  const [show,setShow]=useState(false);  
  const cartObj = {
    "_id" : `${uId}_cart`,
    "item": cartItem}
async function createCart(){

  await fetch(`${API}/cart`,{
    method : 'POST',
    body :JSON.stringify(cartObj),
   headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
  }).then((data)=>data.json())
  .then((d)=>console.log("successfully created",d))
}
async function cartInDb(){
  await fetch(`${API}/cart/${uId}_cart`,{
    method : 'POST',
    body :JSON.stringify(cartItem),
   headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
  }).then((data)=>data.json())
  .then((d)=>console.log("successful",d))
 
}
  function findArrayElementByName(array, name) {
    return array.find((element) => {
      return element.name === name;
    })
  }

  // eslint-disable-next-line
  const [topRatedVal,setTopRatedVal]=useState('');
  
  const  tryNow = (e) => {
 
    console.log("the req val is",e.target.value)
    const exists = cartItem.filter(v => (v.name === homemenu.name ));
console.log(exists);
  if(exists.length===0){

    homemenu.qty=homemenu.qty+1;
 cartItem.push(homemenu);
    setCartItem([...cartItem]);
    setItemCount(itemCount + 1);
 
  }
  else{

    console.log("Hello World");
    const addedItem=findArrayElementByName(cartItem,homemenu.name);
    addedItem.qty=addedItem.qty+1;
    cartItem.push();
    setCartItem([...cartItem]);

}
fetch(`${API}/cart/${uId}_cart`,{
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
 console.log(topRatedVal);
    
    return (
<Container >
 
      <Row>
        <Col md={12}>
        <div className="cards">
          <Card  className="custom-homeCard" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          
      <Card.Img className="custom-card-img" src={homemenu.pic} alt="Card image" />
      <Card.ImgOverlay >
    {isShown===true ?  
        <div className='custom-card-btn'>
     
        <Button className='cardBtn' variant="text" id={homemenu.id} value={homemenu.name}  onClick={(e)=>{if(uId!==""){tryNow(e)}else{setShow(true); window.scrollTo(0, 0)}}}><img className="tryNowbtn" src="https://cdn-icons-png.flaticon.com/512/70/70021.png" alt='try now'/></Button>
        
        </div>
       : null}
        
      </Card.ImgOverlay>
      <div className="mt-4" style={{marginLeft:"20px"}}>
      <h5 className='custom-card-title'>{homemenu.name}</h5> 
        <Card.Text style={{fontWeight:"bolder",color:"gray"}}>₹ {homemenu.price}.00</Card.Text>
        </div>
    </Card> 
    
    </div>

        </Col>

        </Row>
        <ToastContainer position="top-end"className="toastmsg " style={{marginRight:"40px",marginTop:"85px"}} >

{show===true ? <Toast onClose={() => setShow(false)} show={show} bg="danger" delay={3000} autohide>
    <Toast.Header>
      
      <strong className="me-auto">Please Login to add items to the cart</strong>
  
    </Toast.Header>
    
  </Toast> :
  null}
  </ToastContainer>


        </Container>
    );
}

export default Cards;


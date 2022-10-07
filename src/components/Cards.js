import React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
function Cards({homemenu,cartItem,setCartItem,itemCount,setItemCount,userId,uId})
 {
  const [isShown, setIsShown] = useState(false);
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
  await fetch(`http://localhost:4000/cart/${uId}_cart`,{
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

  
  const [topRatedVal,setTopRatedVal]=useState('');
  
  const  tryNow = (e) => {
 
    console.log("the req val is",e.target.value)
    const exists = cartItem.filter(v => (v.name === homemenu.name ));
console.log(exists);
  if(exists.length===0){
    // console.log(item.value);

   homemenu.qty=homemenu.qty+1;
 cartItem.push(homemenu);
    setCartItem([...cartItem]);

 
 
    setItemCount(itemCount + 1);
 
 
    // console.log("item is a"+item.name)
  }
  else{

    console.log("Hello World");
    const addedItem=findArrayElementByName(cartItem,homemenu.name);
    addedItem.qty=addedItem.qty+1;
    cartItem.push();
    setCartItem([...cartItem]);

  // console.log("Search"+item)
}
fetch(`http://localhost:4000/cart/${uId}_cart`,{
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
      
        {/* <div className="cards">
          
        <div className='top-picks'>
          
         <Card className="custom-card">
         <img className='poster' src={homemenu.pic} alt={homemenu.name} />
         
            <CardContent>
             <h5>{homemenu.name}</h5> */}
            {/* <p><Rating name="half-rating-read" value={homemenu.rating} precision={0.5} readOnly /></p> */}
            
            {/* <p>Rating: <Rating onClick={handleRating} ratingValue={rating}/></p> */}
           {/* <p className="price">Price : ₹ {homemenu.price}.00</p> */}
          {/* <p className="offer">{homemenu.offer}</p> */}
            {/* </CardContent>   */}
            {/* <CardActions className='buttons'>
              <Button id={homemenu.id} value={homemenu.name} variant="contained" onClick={()=>{if(userId!="anonymous"){tryNow()}else{setShow(true)}}}>Try Now</Button>
            </CardActions>
         </Card> */}
         {/* </div>
        </div> */}
        <div className="cards">
          <Card  className="custom-homeCard" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          
      <Card.Img className="custom-card-img" src={homemenu.pic} alt="Card image" />
      <Card.ImgOverlay >
      
        {/* <Card.Title>{homemenu.name}</Card.Title> */}
    {isShown===true ?  
        <div className='custom-card-btn'>
        {/* <Card.Title >{homemenu.name}</Card.Title> */}
        
        <Button className='cardBtn' variant="text" id={homemenu.id} value={homemenu.name}  onClick={(e)=>{if(uId!=""){tryNow(e)}else{setShow(true); window.scrollTo(0, 0)}}}><img className="tryNowbtn" src="https://cdn-icons-png.flaticon.com/512/70/70021.png"/></Button>
        
        
        
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


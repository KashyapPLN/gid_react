import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react'

import { Button } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards({homemenu})
 {
  const [topRatedVal,setTopRatedVal]=useState('');
  
  const  tryNow = (e) => {
  setTopRatedVal(e.target.value)
  console.log(topRatedVal);
 }
    
    return (
<Container >
 
      <Row>
        <Col md={12}>
      
        <div className="cards">
          
        <div className='top-picks'>
          
         <Card className="custom-card">
         <img className='poster' src={homemenu.pic} alt={homemenu.name} />
            <CardContent>
             <h5>{homemenu.name}</h5>
            <p><Rating name="half-rating-read" value={homemenu.rating} precision={0.5} readOnly /></p>
            
            {/* <p>Rating: <Rating onClick={handleRating} ratingValue={rating}/></p> */}
           <p className="price">Price : ₹ {homemenu.price}.00</p>
          <p className="offer">{homemenu.offer}</p>
            </CardContent>  
            <CardActions className='buttons'>
              <Button id={homemenu.id} value={homemenu.name} variant="contained" onClick={tryNow}>Try Now</Button>
            </CardActions>
         </Card>
         </div>
        </div>
        </Col>
        </Row>
        </Container>
    );
}

export default Cards;


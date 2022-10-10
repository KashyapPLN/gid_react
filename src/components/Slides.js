import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slides(){
    return(
      <span className='slides_Split'>
        <Carousel variant="dark" className='mt-0'>

      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
         
          src="https://i.postimg.cc/prsFvLWN/Sketch003.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
         src="https://i.postimg.cc/VL5SM1s6/Sketch004.jpg"
          alt="Second slide"
          
        />

       
      </Carousel.Item>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
          src="https://i.postimg.cc/pdr1MmPv/Sketch002.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
          src="https://i.postimg.cc/Qddx8cNB/Sketch001.jpg"
          alt="Fourth slide"
        />

        
      </Carousel.Item>
    </Carousel>
    
  </span> 
    )
}
export default Slides;
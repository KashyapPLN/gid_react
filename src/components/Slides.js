import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slides(){
    return(
        <Carousel className='mt-5'>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
          // src="https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1595939914/blog/krgg4qvarwjphskwj9id.webp"
          src="https://newbhaiasweet.com/wp-content/uploads/2019/09/banner1.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption >
          <h1 className="slide-txt">Laddoos</h1>
          <p className="slide-desc">Enjoy Our freshly made mouth watering Laddoos at <h3 className="slide-desc">30% off</h3></p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
         src="https://wallpaperaccess.com/full/1317252.jpg"
          alt="Second slide"
          
        />

        {/* <Carousel.Caption>
          <h1 className="slide-txt">Second slide label</h1>
          <p className="slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
          src="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h1 className="slide-txt">Third slide label</h1>
          <p className="slide-desc">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="slides">
        <img
          className="d-block w-100 slide-pic"
          src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Fourth slide"
        />

        {/* <Carousel.Caption>
          <h1 className="slide-txt">Fourth slide label</h1>
          <p className="slide-desc">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
    )
}
export default Slides;
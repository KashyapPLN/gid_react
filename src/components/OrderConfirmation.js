import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import { Row } from 'react-bootstrap';
function OrderConfirmation({currentOrder}) {
    const navigate = useNavigate();
    useEffect(() => {
       setTimeout(() => {
          navigate('/')
        }, 5000)
        // eslint-disable-next-line
       }, [])
    return (
        <div >
        <h5 className='mt-5' style={{textAlign:'center'}}> Order Placed Successfully. Thank You for Placing the order.</h5>
         <p style={{display:'flex',justifyContent:'center'}}><img className='orderConfirm' src='https://www.legalraasta.com/wp-content/uploads/2017/06/legalraasta.gif' alt='Order Confirmed' /></p>
        <div className='mt-5' style={{justifyContent:'center',display:'flex',flexDirection:Row,}}><span style={{marginRight:"30px"}}>Redirecting to Home Page</span> <Spinner animation="border" variant="primary" /> </div>
        </div>
    );
}

export default OrderConfirmation;
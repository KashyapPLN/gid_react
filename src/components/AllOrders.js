import { Container } from "@mui/material";
import * as React from "react";
import Card from 'react-bootstrap/Card';

export default function AllOrders({orders}){
    return(
        <div>
            <Container >
            {orders.map((details)=> <Card className="mb-5">
              <Card.Title className="mb-2 text-muted mt-2"style={{marginLeft:"16px"}}>Order Id : {details._id}</Card.Title>
      <Card.Body>
      {details.orderItem.map((item)=><div className="p_orders"><span style={{marginRight:"30px"}}>{item.name}  x {item.qty}</span>
      
      <span><img className="category"src={item.category} alt='category' /></span></div>)}
        
      <Card.Text className="text-muted">
      
        Time : {details.orderDateTime}
        </Card.Text>

      </Card.Body>
    </Card>)}
            </Container>
        </div>
    )
}
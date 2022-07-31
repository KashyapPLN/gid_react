import { Container } from "@mui/material";
import * as React from "react";
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function CurrentOrders(){
    return(
        <div>
            <Container>
           <Card >
      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Order Id</Card.Subtitle>
        <Card.Text>
          Order Quantity
          <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      
    </Stack>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Container>
        </div>
    )
}
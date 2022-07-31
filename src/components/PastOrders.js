import { Container } from "@mui/material";
import * as React from "react";
import Card from 'react-bootstrap/Card';

export default function PastOrders(){
    return(
        <div>
            <Container>
           <Card >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Hello
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Container>
        </div>
    )
}
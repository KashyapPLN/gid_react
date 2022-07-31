import * as React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import { Container, FormControl, TextField } from "@mui/material";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Address(){
    const [enableAddr,setEnableAddr] = useState(false);
return(
    <Container>
        <h4>Select Address</h4>
    <div className="addresspage">
       
        <Card className="address">
      <Card.Header><Card.Title><LocationOnIcon sx={{marginRight:"16px",marginBottom:"6px"}}/>Address</Card.Title></Card.Header>
      <Card.Body className="addressbody">
      <Form>
      <FormControl>
        <Card.Text className="addressform">
        <TextField className="addresstxt" label="Name" /> 
          <TextField label="Address Line 1" />
          <TextField label="Address Line 2" />
          <TextField label="Address Line 3" />
          <TextField label="Pin Code" />
        </Card.Text>
        <Button variant="contained">Edit</Button>
        </FormControl>
        </Form> 
      </Card.Body>
    </Card>
    
    <Card className="address" >
      <Card.Header><Card.Title><AddLocationAltIcon sx={{marginRight:"16px",marginBottom:"6px"}} />Address 2</Card.Title></Card.Header>
      <Card.Body className="addressbody" disabled="true">
      <Form >
      <FormControl>
        <Card.Text className="addressform">
        <TextField label="Name" /> 
          <TextField label="Address Line 1" />
          <TextField label="Address Line 2" />
          <TextField label="Address Line 3" />
          <TextField label="Pin Code" />
        </Card.Text>
        <Button variant="contained">Add New</Button>
        </FormControl>
        </Form>
      </Card.Body>
    </Card>
    </div>
    </Container>
)
}
import { Container } from "@mui/system";
import * as React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import Footer from "./Footer";
export default function HelpFaq(){
    return(
        <div>
        <Container className='mt-5'>
            <h2 className='mb-5'>Frequently Asked Questions</h2>
            <Accordion flush>
                {/* defaultActiveKey="0"  */}
      <Accordion.Item eventKey="0">
        <Accordion.Header flush><p className="question">What is customer care number ?</p></Accordion.Header>
        <Accordion.Body>
          Click below links to contact us.
         <p className="mt-2 text-center"> For any Queries <IconButton aria-label="emailus" color="primary" onClick=""><EmailIcon /></IconButton> or  
         <IconButton aria-label="emailus" color="primary"><CallIcon/></IconButton> us</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><p className="question">Is there any order limit ?</p></Accordion.Header>
        <Accordion.Body>
          There is no Order Limit.
          <p className="mt-2 text-center"> For any Queries <IconButton aria-label="emailus" color="primary" onClick=""><EmailIcon /></IconButton> or  
         <IconButton aria-label="emailus" color="primary"><CallIcon/></IconButton> us</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><p className="question">How to cancel my order ?</p></Accordion.Header>
        <Accordion.Body>
          You can cancel your order once it is confirmed by clicking cancel order  button in the current order section in the order page.
          <p className="mt-2 text-center"> For any Queries <IconButton aria-label="emailus" color="primary" onClick=""><EmailIcon /></IconButton> or  
         <IconButton aria-label="emailus" color="primary"><CallIcon/></IconButton> us</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><p className="question">How long does it take to get my refund ?</p></Accordion.Header>
        <Accordion.Body>
          It usually takes around 4-7 working days to get your refund credited.
          <p className="mt-2 text-center"> For any Queries <IconButton aria-label="emailus" color="primary" onClick=""><EmailIcon /></IconButton> or  
         <IconButton aria-label="emailus" color="primary"><CallIcon/></IconButton> us</p> 
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </Container>
        <Footer />
        </div>
    )
}
import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container } from "@mui/system";

export default function Footer(){
    return(
     <div className="mt-5" 
  style={{overflow:'hidden',top: 'auto', bottom: 0,height:'180px',width:'100%'}}
     >
        <AppBar className="footer-disp" position="fixed" sx={{top: 'auto', bottom: 0,height:'180px',backgroundColor:'#e1e1e1'}}>
        <div className="custom-footer">
            <Container >
            <Button  variant="text" aria-label="contact Us">
          <EmailIcon />
          </Button>
          <Button variant="text"> 
          <CallIcon />
          </Button>
          <Button variant="text"> 
          <FacebookIcon />
          </Button>
          <Button variant="text"> 
          <InstagramIcon />
          </Button>
          <Button variant="text"> 
          <TwitterIcon/>
          </Button>
          <Button variant="text"> 
          <YouTubeIcon/>
          </Button>
    </Container>
   <Container >
          <Button variant="text" >Our Services</Button>
          <Button variant="text" >Privacy Policy</Button>
          <Button variant="text">Terms and Conditions</Button>
          <Button variant="text">Careers</Button>
          </Container>
          
         
 <Container >
<p className="footer-txt">Copyright © 2022 The Great Indian Dessert - All rights reserved</p>
</Container>

</div>
      </AppBar>
      </div>
    )
}
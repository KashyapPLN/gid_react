import * as React from "react";
import Card from 'react-bootstrap/Card';
import { Button, Input } from '@mui/material';
import { Container} from "@mui/material";
import { useState,useEffect } from "react";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from "axios";
import { API } from '../global';
export default function Address({userName1,uId,parentCallback}){
 
    const [name,setName]=useState("");
    const [line1,setLine1]=useState("");
    const [line2,setLine2]=useState("");
    const [line3,setLine3]=useState("");
    const [pin,setPin]=useState("");

   
    console.log("uId in addr is", uId)
    const[addressExist,setAddressExist]=useState(false);
   
  parentCallback(addressExist);

const handleSubmit = (e) => {
  const addressObj = {
    name : name,
    line1 : line1,
    line2 : line2,
    line3 : line3,
    pin : pin
    
        }
    const addrObj ={
      _id : `${uId}_address`,
       address : addressObj
    }
        console.log(addressObj,"is addressobject")

        fetch(`${API}/user/address`,{
          method : 'POST',
           body :JSON.stringify(addrObj),
          headers:{ 'Content-Type': 'application/json',
                   'Accept' : 'application/json' }
          }).then((data)=>data.json())
          .then((d)=>console.log("successful",d))
      setAddressExist(true);
}
 
function handleEdit(e){
  const addressObj = {
    name : name,
    line1 : line1,
    line2 : line2,
    line3 : line3,
    pin : pin
    
        }
    const addrObj ={
      _id : `${uId}_address`,
       address : addressObj
    }
        console.log(addressObj,"is addressobject")

        fetch(`${API}/user/${uId}_address`,{
          method : 'PUT',
           body :JSON.stringify(addrObj),
          headers:{ 'Content-Type': 'application/json',
                   'Accept' : 'application/json' }
          }).then((data)=>data.json())
          .then((d)=>console.log("successful",d))
      //  setAddressExist(true);
}

 useEffect(()=>{
  axios.get(`${API}/user/${uId}_address`)
   .then((res)=>{console.log("address res is",res.data);
  // setDefaultAddr(res.data);
  setName(res.data.address.name);
  setLine1(res.data.address.line1);
  setLine2(res.data.address.line2);
  setLine3(res.data.address.line3);
  setPin(res.data.address.pin);

  setAddressExist(true);

  })
     .catch(err=>{console.log(err)})
   // eslint-disable-next-line
   },[])
return(
    <Container>
       
    <div className="addresspage">
       
      {name&&line1&&line2&&line3&&pin!== undefined && addressExist===true? 
       <Card className="address">
      <Card.Header><Card.Title><LocationOnIcon sx={{marginRight:"16px",marginBottom:"6px"}}/>Address</Card.Title></Card.Header>
      <Card.Body className="addressbody">
      <form>
      {/* <FormControl> */}
        <Card.Text className="addressform">
        <Input className="addresstxt" placeholder="Name" 
       value={name}
       onChange={(e)=>setName(e.target.value)}
        /> 
          <Input placeholder="Address Line 1" 
          value={line1}
         onChange={(e)=>setLine1(e.target.value)}
          />
          <Input placeholder="Address Line 2" 
          value={line2} 
         onChange={(e)=>setLine2(e.target.value)}
          />
          <Input placeholder="Address Line 3"
         value={line3}
         onChange={(e)=>setLine3(e.target.value)}
           />
          <Input placeholder="Pin Code" 
        value={pin}
         onChange={(e)=>setPin(e.target.value)}
          />
        </Card.Text>
        <Button onClick={(e)=> handleEdit(e)} variant="contained">Edit</Button>
        </form> 
      </Card.Body>
    </Card>
    
   : <Card className="address" >
      <Card.Header><Card.Title><AddLocationAltIcon sx={{marginRight:"16px",marginBottom:"6px"}} />Address</Card.Title></Card.Header>
      <Card.Body className="addressbody" >
      <form >
        <Card.Text className="addressform">
        <Input placeholder="Name"  onChange={(e)=>setName(e.target.value)} /> 
          <Input placeholder="Address Line 1"  onChange={(e)=>setLine1(e.target.value)} />
          <Input placeholder="Address Line 2"  onChange={(e)=>setLine2(e.target.value)} />
          <Input placeholder="Address Line 3"   onChange={(e)=>setLine3(e.target.value)}/>
          <Input placeholder= "Pin Code"  onChange={(e)=>setPin(e.target.value)} />
        </Card.Text>
        <Button onClick={(e)=> handleSubmit(e)} variant="contained">Add New</Button>
        </form>
      </Card.Body>
    </Card> 
    }
    </div>
    </Container>
)
}

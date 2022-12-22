
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { API } from '../global';
function UpdateUserMobile({uId}) {
const [updated,setUpdated]=useState(false);

const [phone,setPhone]=useState('');

console.log('uId in update acc',uId);
    function userUpdate(e){
        const obj={
            phoneNumber:phone,
            
        }
        fetch(`${API}/user/update-phone/${uId}`,{
        method : 'PUT',
        body :JSON.stringify(obj),
        
        // mode: 'no-cors',
        headers:{ 'Content-Type': 'application/json',
                  'Accept' : 'application/json',
                // 'Access-Control-Allow-Origin:':'http://localhost:3000',
                 
                 }
      }).then((data)=>console.log(data))
      setUpdated(true);
    }
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'300px',marginLeft:'300px',gap:'10px'}}>
            <h4 className='mt-5 mb-4'>Update Phone Number </h4>
        
            <TextField type='text' label='Phone Number'onBlur={(e)=>setPhone(e.target.value)}/><br/>
          
          
            <Button variant='contained' onClick={(e)=>userUpdate(e)}>Update</Button>
            {updated===true?<p style={{color:'green'}}>User Phone Number updated successfully </p>:null}
        </div>
    );
};

export default UpdateUserMobile;

import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API } from '../global';
function ResetPassword() {
    const [userName, setUserName]=useState('');
    const [changedPwd, setChangedPwd]=useState('');
    const [confirmChangedPwd, setConfirmChangedPwd]=useState('');
    console.log('is changed pwd',changedPwd);
    console.log('is confirm changed pwd',confirmChangedPwd);
    const navigate=useNavigate();
    const [pwdErr,setPwdErr]= useState(false);
function changePassword(e){

   
if(changedPwd===confirmChangedPwd&&changedPwd!==''){
    const rPwd={
        password:changedPwd
    }
    fetch(`${API}/user/update-password/${userName}`,{
        method : 'PUT',
        body :JSON.stringify(rPwd),
        headers:{ 'Content-Type': 'application/json',
                  'Accept' : 'application/json',
                
                 }
      }).then((data)=>console.log(data))
      navigate('/');
}
else{
setPwdErr(true);
    console.log('Mismatch. Please try again');
}
 }


    return (
        
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'300px',marginLeft:'300px',gap:'10px'}}>
       <h4 className='mt-5 mb-4'>Reset Password </h4>
         <TextField className='mb-1'type='text' label='Enter UserName'onBlur={(e)=>(setUserName(e.target.value))}/>
         <TextField id='resetPassword'className='resetPassword mt-4' type='password' label='Enter New Password' onBlur={(e)=>(setChangedPwd(e.target.value))}/><br/>
         <TextField className='mb-1'type='password' label='Renter New Password'onBlur={(e)=>(setConfirmChangedPwd(e.target.value))}/>
         {pwdErr===true ?<p style={{color:'red'}}>Password mismatch. Please try again</p> : null}
         <Button className='mt-4'variant='contained' onClick={(e)=>changePassword(e)}>Confirm</Button>
       
     </div>
      
    );
}

export default ResetPassword;

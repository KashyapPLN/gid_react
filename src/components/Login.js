import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Modal from 'react-bootstrap/Modal'
import OtpInput from "react-otp-input";
import Collapse from 'react-bootstrap/Collapse'
import { useFormik } from 'formik';
import * as yup from "yup";

const loginFormValidationSchema = yup.object({
  phone: yup.string().min(10,"Mobile number must contain a minimum of 10 digits").max(10,"Mobile number must contain a maximum of 10 digits").required("Please Enter your Mobile number"),
  password : yup.string().min(8).required("Password Not Entered"),
})

const signUpFormValidationSchema = yup.object({
  phoneNo: yup.string().min(10,"Mobile number must contain a minimum of 10 digits").max(10,"Mobile number must contain a maximum of 10 digits").required("Please Enter your Mobile number"),
  password : yup.string().min(8).required("Password Not Entered"),
  email: yup.string().required("Please enter a valid E-mail id"),
  uname :yup.string().required("Please enter a userName")

})

export default function Login() {

 
  return (
    
    <Box className="loginform">
        <div className="form-container">
          
          
<Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3 " >
  <Tab tabClassName="lstab" eventKey="login" title="Login">
  <LoginForm />
  </Tab>
  <Tab tabClassName="lstab" eventKey="signup" title="Sign Up">
  <SignUpForm />
  </Tab>
  </Tabs>

       </div>
    </Box>
  );
}
function SignUpForm(){

  const {handleChange,handleBlur,handleSubmit,touched,values,errors} = useFormik({
    initialValues:{phoneNo :"1234567890",password :"",email:"",uname:"" },
    validationSchema : signUpFormValidationSchema,
    onSubmit : (values) => {console.log("onSubmit",values);}
  })

  return(

<div className="signup">
<form onSubmit={handleSubmit}>
<TextField 
 value={values.phoneNo} 
        name="phoneNo"
        onChange={handleChange}
        onBlur={handleBlur}
label="Phone Number" 
className='linput' 
sx={{width:"100%",paddingBottom : '30px',marginTop :'30px'}}
/>
{/* <p style={{color:"red"}}>{touched.phoneNo && errors.phoneNo ? errors.phoneNo : ""}</p> */}

<TextField 
value={values.uname} 
name="uname"
onChange={handleChange}
onBlur={handleBlur}
label="Name" className='linput' sx={{width:"100%",paddingBottom : '30px'}}
/>

{/* <p style={{color:"red"}}>{touched.uname && errors.uname ? errors.uname : ""}</p> */}

<TextField
value={values.email} 
name="email"
onChange={handleChange}
onBlur={handleBlur}
 type="email" label="E-mail" className='linput' sx={{width:"100%",paddingBottom : '30px'}}
 />
 {/* <p style={{color:"red"}}>{touched.email && errors.email ? errors.email : ""}</p> */}

<TextField 
name="password"
value={values.password} 
onChange={handleChange}
onBlur={handleBlur}
type="password" label="password" className='linput' sx={{width:"100%",paddingBottom : '30px'}}/>
 {/* <p style={{color:"red"}}>{touched.password && errors.password ? errors.password : ""}</p> */}

<Button type="submit" variant="contained" sx={{width:"100%"}}>Sign Up</Button>
</form>
</div>

  );
}
function LoginForm(){

  const {handleChange,handleBlur,handleSubmit,touched,values,errors} = useFormik({
    initialValues:{phone :"1234567890",password :"" },
    validationSchema : loginFormValidationSchema,
    onSubmit : (values) => {console.log("onSubmit",values);}
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
<div className="login">
  <form onSubmit={handleSubmit}>

    
        <TextField value={values.phone} 
        name="phone"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Mobile Number"
         className='linput' 
         sx={{width:"100%",paddingBottom : '30px',marginTop :'30px'}} />
         <p style={{color:"red"}}>{touched.phone && errors.phone ? errors.phone : ""}</p>

         
        <TextField label="Password" 
        name="password"
        value={values.password} 
        onChange={handleChange}
        onBlur={handleBlur}
        type="password" className='linput'
        sx={{width:"100%",paddingBottom : '30px'}} />
        <p style={{color:"red"}}>{touched.password && errors.password ? errors.password : ""}</p>

        <p>Forgot <Button variant="text" onClick={handleShow} >Password</Button> ?</p>
        <Button type="submit"variant="contained" sx={{width:"100%"}}>login</Button>
        <p className="tc">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        <Modal
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} onHide={handleClose}
    >
      <Modal.Header closeButton >
      <Modal.Title>Forgot Password ?</Modal.Title>
      </Modal.Header>
        
      
      <Modal.Body>
        <ForgotPassword />
      </Modal.Body>
      
    </Modal>
    </form>
</div>
  )
}
function ForgotPassword(){
  // const [otpTxtField, setOtpTxtField]=useState(false);
  //  const handleOtpShow=setOtpTxtField(false);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // console.log(handleOtpShow)
  return(
    <div className="forgotpwd">
      <form>
        <div>
           <TextField label="Phone Number"  sx={{width:"100%",paddingBottom : '30px',marginTop :'30px'}}></TextField>
           </div>  
           
           
           <Button variant="contained"
        onClick={() => {setOpen(!open);setDisabled(!disabled)}}
        aria-controls="otp"
        aria-expanded={open}
        disabled={disabled}
      >
        Generate OTP
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         <OtpField />
        </div>
      </Collapse>
    
 
          
         </form>  
         </div>
  )
}
function OtpField(){
  return(
    <div className="forgotpwd1">
      <p>Enter the 6 - digit OTP sent to your Mobile Number</p>
      <div className='otpboxes'>
<OtpInput
          onChange={otp => console.log(otp)}
          numInputs={6}
          separator={<span>-</span>}
         
        />
        </div>
       <Button  sx={{marginTop :'20px'}} variant="contained" >Confirm OTP</Button>
       </div>
        
  )
}
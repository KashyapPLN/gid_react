import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Modal from 'react-bootstrap/Modal'
import OtpInput from "react-otp-input";
import Collapse from 'react-bootstrap/Collapse'
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import firebase from './firebase';

const loginFormValidationSchema = yup.object({
  uName: yup.string().required("Please Enter UserName"),
  password : yup.string().min(8).required("Password Not Entered"),
})

const signUpFormValidationSchema = yup.object({
  phoneNumber: yup.string().min(10,"Mobile number must contain a minimum of 10 digits").max(10,"Mobile number must contain a maximum of 10 digits").required("Please Enter your Mobile number"),
  password : yup.string().min(8).required("Password Not Entered"),
  email: yup.string().required("Please enter a valid E-mail id"),
  userName :yup.string().required("Please enter a username")

})

export default function Login({userId,setUserId,setShowOffC}) {
  const [message,setMessage] = useState("");
  const [show, setShow] = useState(false);
  const[errMsg,setErrMsg] = useState(false);
  const [otpSuccess,setOtpSuccess] =useState(false);
 
  return (
    <div>
    <Box className="loginform">
        <div className="form-container">
          
          
<Tabs style={{width:"500px"}} defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3 "  >
  <Tab tabClassName="lstab" eventKey="login" title="Login">
  <LoginForm className="testlogin" userId={userId} setUserId={setUserId} setMessage={setMessage} setShow={setShow} setErrMsg={setErrMsg} setShowOffC={setShowOffC} otpSuccess={otpSuccess} setOtpSuccess={setOtpSuccess}/>
  </Tab>
  <Tab tabClassName="lstab signup-tab" eventKey="signup" title="Sign Up">
  <SignUpForm className="signup-form" message={message} setMessage={setMessage} show={show} setShow={setShow} setErrMsg={setErrMsg}/>
  </Tab>
  </Tabs>
   </div>
   
    </Box>
    <ToastContainer position="top-center"className="mt-5 " style={{marginRight:"40px"}} >

      {errMsg===true ? <Toast onClose={() => setShow(false)} show={show} bg="danger" delay={3000} autohide>
          <Toast.Header>
            
            <strong className="me-auto">{message}</strong>
        
          </Toast.Header>
          
        </Toast> :
        <Toast onClose={() => setShow(false)} show={show} bg="success" delay={3000} autohide>
          <Toast.Header>
            
            <strong className="me-auto">{message}</strong>
        
          </Toast.Header>
          
        </Toast>}
        </ToastContainer>
    </div>
  );
}
function SignUpForm({message,setMessage,show,setShow,setErrMsg}){


  const {handleChange,handleBlur,handleSubmit,touched,values,errors} = useFormik({
initialValues:{phoneNumber :"",password :"",email:"",userName:"" },
    validationSchema : signUpFormValidationSchema,
    onSubmit : async (values) => {await fetch("http://localhost:4000/user/signup",{
      method : 'POST',
      body :JSON.stringify(values),
      headers:{ 'Content-Type': 'application/json',
                'Accept' : 'application/json' }
    }).then((data)=>signupMessage(data))
 
 
  }
  })

function signupMessage(data){
 
const status = data.status
console.log("signup status",status);
if(status===400){
  setErrMsg(true);
 
}
else if(status===200){

  document.getElementById("uncontrolled-tab-example-tabpane-signup").classList.remove('show');
  document.getElementById("uncontrolled-tab-example-tabpane-signup").classList.remove('active');
  document.getElementById("uncontrolled-tab-example-tabpane-login").classList.add('active');
  document.getElementById("uncontrolled-tab-example-tabpane-login").classList.add('show');
  document.getElementsByClassName('signup-tab')[0].style.visibility = 'hidden';  
}

  data.json().then((d)=>setMessage(d.message))
  
}
console.log('message is',message);  
  return(

<div className="signup">
<form onSubmit={handleSubmit}>

<p style={{color:"red"}}>{touched.userName && errors.userName ? errors.userName : ""}</p>
<TextField 
value={values.userName} 
name="userName"
onChange={handleChange}
onBlur={handleBlur}
label="User Name" className='linput' sx={{width:"100%",marginTop :'30px'}}
/>


<p style={{color:"red",paddingBottom : '30px'}}>{touched.phoneNumber && errors.phoneNumber ? errors.phoneNumber : ""}</p>  
<TextField 
value={values.phoneNumber} 
        name="phoneNumber"
        onChange={handleChange}
        onBlur={handleBlur}
label="Phone Number" 
className='linput' 
sx={{width:"100%",paddingBottom : '30px'}}
/>
 


<p style={{color:"red"}}>{touched.email && errors.email ? errors.email : ""}</p>
<TextField
 value={values.email} 
name="email"
onChange={handleChange}
onBlur={handleBlur}
 type="email" label="E-mail" className='linput' sx={{width:"100%",paddingBottom : '30px'}}
 />

<p style={{color:"red"}}>{touched.password && errors.password ? errors.password : ""}</p>
<TextField 
name="password"
 value={values.password} 
onChange={handleChange}
onBlur={handleBlur}
type="password" label="password" className='linput' sx={{width:"100%",paddingBottom : '30px'}}/>


<Button type="submit" onClick={() => setShow(true)} variant="contained" sx={{width:"100%"}}>Sign Up</Button>
</form>


</div>

  );
}
function LoginForm({userId,setUserId,setMessage,setShow,setErrMsg,otpSuccess,setOtpSuccess,setShowOffC}){


  const navigate = useNavigate();
  const {handleChange,handleBlur,handleSubmit,touched,values,errors} = useFormik({
    initialValues:{uName :"",password :"" },
    validationSchema : loginFormValidationSchema,
    onSubmit :  async (values) => {await fetch("http://localhost:4000/user/login",{
      method : 'POST',
      body :JSON.stringify(values),
      headers:{ 'Content-Type': 'application/json',
                'Accept' : 'application/json' }
    }).then((data)=>performLogin(data))
    if(userId!=='anonymous'){
    navigate('/menu');
    }
    
  }
  })

   function performLogin(data){

  if(data.status===200){
    setErrMsg(false)
    data.json().then((d)=>d)
    .then((v)=>{setUserId(v.user);setMessage(v.message)
    console.log(v.mesage)
document.cookie = "token="+v.token+";path=/"; 
    console.log(v);
  });
    }else{
      data.json().then((d)=>d)
      .then((v)=>setMessage(v.message));
      setErrMsg(true);
    }

  
    
  
}

  const [showFp, setShowFp] = useState(false);

  const handleClose = () => setShowFp(false);
  const handleShow = () => setShowFp(true);
  return(
<div className="login">
  <form onSubmit={handleSubmit}>

    
        <TextField value={values.uName} 
        name="uName"
        onChange={handleChange}
        onBlur={handleBlur}
        label="User Name"
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
        <Button type="submit" onClick={() => setShow(true)} variant="contained" sx={{width:"100%"}}>login</Button>
        <p className="tc">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        <Modal
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showFp} onHide={handleClose}
    >
      <Modal.Header closeButton >
      <Modal.Title>Forgot Password ?</Modal.Title>
      </Modal.Header>
        
      
      <Modal.Body>
        <ForgotPassword otpSuccess={otpSuccess} setOtpSuccess={setOtpSuccess} setShowFp={setShowFp} setShowOffC={setShowOffC}/>
      </Modal.Body>
      
    </Modal>
    </form>
</div>
  )
}
function ForgotPassword({otpSuccess,setOtpSuccess,setShowFp,setShowOffC}){
 const [mobile,setMobile] = useState('');
  const [open, setOpen] = useState(false);
 
  const [disabled, setDisabled] = useState(false);
  // console.log(handleOtpShow)
  const handleChange = (e) => {setMobile(e.target.value);console.log(mobile);}

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("Recaptcha Verified");
      },
      defaultCountry : "IN"
    });
  }
const onSignInSubmit = (e) =>{
  e.preventDefault();
  configureCaptcha();
  const phoneNumber ='+91'+mobile;
  console.log(phoneNumber);
  const appVerifier = window.recaptchaVerifier;
   
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('OTP has been sent');
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        console.log('SMS not sent');
        // ...
      });
}

  return(
    <div className="forgotpwd">
      <form >
        <div id= 'sign-in-button'></div>
        <div>
           <TextField max={10} name='mobnumber' label="Mobile Number" type="text" sx={{width:"100%",paddingBottom : '30px',marginTop :'30px'}} onChange={(e)=>{handleChange(e)}} required/>
           </div>  
           
           
           {disabled===false?<Button variant="contained"
        onClick={(e) => {setOpen(!open);setDisabled(!disabled);onSignInSubmit(e)}}
        aria-controls="otp"
        aria-expanded={open}
        disabled={disabled}
      >
        Generate OTP
      </Button> : <Button variant="contained"
        onClick={(e) => {
          onSignInSubmit(e)
          
        }}
        aria-controls="otp"
        aria-expanded={open}
     
      >Resend Otp</Button>
      
      }
      <Collapse in={open}>
        <div id="example-collapse-text">
         <OtpField otpSuccess={otpSuccess} setOtpSuccess={setOtpSuccess} setShowFp={setShowFp} setShowOffC={setShowOffC}/>
        </div>
      </Collapse>
    
 
          
         </form>  
         </div>
  )
}
function OtpField({otpSuccess,setOtpSuccess,setShowFp,setShowOffC}){
  const navigate = useNavigate();
  const otpSubmit = (e,otp) =>{
  const code = otp;
window.confirmationResult.confirm(code).then((result) => {
 console.log(result);
 navigate('/resetpwd');
 setShowFp(false);
 setOtpSuccess(true);
 document.getElementsByClassName("login-signup")[0].style.display = 'none';

 window.location.reload();
 console.log(otpSuccess);
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  setOtpSuccess(false);
  console.log(error);
});

}


 

  const [otp,setOtp]=useState([]);
  const[counter,setCounter]=useState(0);
  // function otpValidation(e){console.log("otp entered is",otp);}
  return(
     <div className="forgotpwd1">
   
     <p>Enter the 6 - digit OTP sent to your Mobile Number</p>
      <div className='otpboxes'>
 <OtpInput
          value={otp} 
          onChange={otpVal => setOtp(otpVal)}
          numInputs={6}
          separator={<span>-</span>}
            inputStyle={{  
                width: '1.5rem',  
                height: '2rem',  
                margin: '1rem 1rem',  
                fontSize: '1rem',  
                borderRadius: 4,  
                border: '2px solid rgba(0,0,0,0.3)',  
                                   
            }}
        />
       
        </div>
       <Button  onClick={(e)=>{otpSubmit(e,otp);setCounter(1)}} sx={{marginTop :'20px'}} variant="contained" >Confirm OTP</Button>
     {otpSuccess===false&&counter===1?<p style={{color:'red'}}>Please enter correct OTP</p>:null}
    
       </div>
    
  )
}


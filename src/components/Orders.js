import { Container } from "@mui/material";
import * as React from "react";
import axios from "axios";

import { useState,useEffect } from "react";

import AllOrders from "./AllOrders";

export default function Orders({displayOrders,userName1,uId}){
    const [orders,setOrders]=useState([]);
    
  
    useEffect(()=>{
     
        
          axios.get(`http://localhost:4000/user/orders/${uId}`)
           .then((res)=>{console.log("orders",res);
           const reversed = res.data.slice().reverse();
        setOrders(reversed);
           
          })
             .catch(err=>{console.log(err)})
             
           },[])
       
    return(
        <div>
            <div>
           
           <Container >
         <AllOrders  orders={orders}/>
           </Container>
           
           </div>
        </div>
    )
}
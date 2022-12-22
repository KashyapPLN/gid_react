import { Container } from "@mui/material";
import * as React from "react";
import axios from "axios";

import { useState,useEffect } from "react";
import { API } from '../global';
import AllOrders from "./AllOrders";

export default function Orders({displayOrders,userName1,uId}){
    const [orders,setOrders]=useState([]);
    
  
    useEffect(()=>{
     
        
          axios.get(`${API}/user/orders/${uId}`)
           .then((res)=>{console.log("orders",res);
           const reversed = res.data.slice().reverse();
        setOrders(reversed);
           
          })
             .catch(err=>{console.log(err)})
         // eslint-disable-next-line    
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

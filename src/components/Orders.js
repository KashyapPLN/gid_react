import { Container } from "@mui/material";
import * as React from "react";

import CurrentOrders from "./CurrentOrders";

import PastOrders from "./PastOrders";

export default function Orders({displayPastOrders,displayCurrentOrders}){
    

    return(
        <div>
            <Container className='mb-5'>
         { displayCurrentOrders===true ?<CurrentOrders /> : null }
           </Container>
           <Container>
          {displayPastOrders===true ? <PastOrders />  : null}
           </Container>
          
        </div>
    )
}
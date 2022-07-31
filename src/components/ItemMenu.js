import * as React from "react";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import menuList from './DessertsData.json';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { IncDecCounter } from "./IncDecCounter";
import { CartCard } from "./CartCard";
import { CategoryFilterList } from "./CategoryFilterList";
import MainMenuCard from "./MainMenuCard";
import { useCallback } from 'react';

export default function ItemMenu({itemCount,setItemCount,cartItem,setCartItem}) {
  const InitialCount = 0;

  // const [cartItem,setCartItem]=useState([]);
  //const [removeButton,setRemoveButton]=useState(false);


  
  const handleAddToCart=(item)=>{
    
    const exists = cartItem.some(v => (v.name === item.name ));
  
  if(!exists){
   item.qty=item.qty+1;
 cartItem.push(item);
    setCartItem([...cartItem]);
  // setCartItem([item]);
    
    setCartItemDisplay(true);
    setItemCount(itemCount + 1);
    
   //setRemoveButton(!removeButton);

  }
  else{
    const addedItem=findArrayElementByName(cartItem,item.name);
    addedItem.qty=addedItem.qty+1;
    cartItem.push();
    setCartItem([...cartItem]);
    setCartItemDisplay(true);
   
  }
  }

  function findArrayElementByName(array, name) {
    return array.find((element) => {
      return element.name === name;
    })
  }
 
  // const [itemCount, setItemCount] = useState(0);
  const handleDec = (item) => {
        
  
      const addedItem=findArrayElementByName(cartItem,item.name);
      if(addedItem.qty>1){
      addedItem.qty=addedItem.qty-1;
      cartItem.push();
      setCartItem([...cartItem]);
      setCartItemDisplay(true);
    }
    else if(addedItem.qty===1){
      addedItem.qty=addedItem.qty-1;
      let filteredArray = cartItem.filter(item1 => item1.name !== item.name);
      setCartItem(filteredArray);

    }
  };

  const handleInc = (item) => {

      const addedItem=findArrayElementByName(cartItem,item.name);
      addedItem.qty=addedItem.qty+1;
      cartItem.push();
      setCartItem([...cartItem]);
      setCartItemDisplay(true);
     
  
  };
  
  const [cartItemDisplay, setCartItemDisplay] = useState(false);



const [filteredList,setFilteredList]=useState([]);
const [originalList,setOriginalList]=useState(menuList);

  let handleFilterList = useCallback((res) =>{
    
    setOriginalList(menuList);
    setFilteredList([]);
    
    menuList.filter(name => name.type.includes(res.target.innerText)).map(filteredItem => {
    filteredList.push(filteredItem);
    setOriginalList(filteredList);
   
     
  });
      

  
  } );

 
  
  
  return (
    <div>
       <Row>
        <div>
        <Col sm={12}>
        
        </Col>
        </div>
      </Row> 
      <div className="menupage">
      <Row >
        <Col sm={3}>
          {/* Filter List Starts Here */}

          <CategoryFilterList handleFilterList={handleFilterList} />
        </Col>
        <Col sm={5}>
        {/*{menuList.map((item,index)=>(<MainMenuCard key={item.id} item={item} handleAddToCart={handleAddToCart} removeButton={removeButton} itemCount={itemCount} removeItem={removeItem} />))}*/}
          {originalList.map((item,index)=>(<MainMenuCard key={item.id} item={item} handleAddToCart={handleAddToCart}  itemCount={itemCount}  />))}
        </Col>
        <Col sm={4}>
          {/* Cart Starts Here */}
         
         <CartCard handleInc={handleInc} handleDec={handleDec} itemCount={itemCount} cartItemDisplay={cartItemDisplay}  cartItem={cartItem} />
        
        </Col>
      </Row>
      </div>
    </div>
  );
}


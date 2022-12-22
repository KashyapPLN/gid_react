import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState} from "react";
import { CartCard } from "./CartCard";
import { CategoryFilterList } from "./CategoryFilterList";
import MainMenuCard from "./MainMenuCard";
import { useCallback } from 'react';
import { API } from '../global';

export default function ItemMenu({itemCount,setItemCount,cartItem,setCartItem,menuList,userId,uId}) {
  const cartObj = {
    "_id" : `${uId}_cart`,
    "item": cartItem}
async function createCart(){

  await fetch(`${API}/cart`,{
    method : 'POST',
    body :JSON.stringify(cartObj),
   headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
  }).then((data)=>data.json())
  .then((d)=>console.log("successfully created",d))
}


async function cartInDb(){
  
  let filteredArray = cartItem.filter(item1 => item1.qty >0);
console.log('filtered array is fgrthtr',filteredArray);
// cartItem.push()
  setCartItem(filteredArray);
  console.log('filtered array is cart',cartItem);
  console.log('cart item when qty 1',cartItem);
  await fetch(`${API}/cart/${uId}_cart`,{
    method : 'POST',
    body :JSON.stringify(filteredArray),
   headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
  }).then((data)=>data.json())
  .then((d)=>console.log("successful",d))
 
}
  
  const handleAddToCart=(item)=>{
    
    const exists = cartItem.some(v => (v.name === item.name ));
  
  if(!exists){
   item.qty=item.qty+1;
 cartItem.push(item);
    setCartItem([...cartItem]);
  // setCartItem([item]);
    
    setCartItemDisplay(true);
    setItemCount(itemCount + 1);
    
  

  }
  else{
    const addedItem=findArrayElementByName(cartItem,item.name);
    addedItem.qty=addedItem.qty+1;
    cartItem.push();
    setCartItem([...cartItem]);
    setCartItemDisplay(true);
   
  }
  console.log(JSON.stringify(cartItem));
if(item.qty>0){
 fetch(`${API}/cart/${uId}_cart`,{
    method : 'POST',
     body :JSON.stringify(cartItem),
    headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
    }).then((data)=>data.json())
    .then((d)=>console.log("successful",d))}
createCart();
if(cartObj){
  cartInDb();
}




  }

  function findArrayElementByName(array, name) {
    return array.find((element) => {
      return element.name === name;
    })
  }
 

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
    if(item.qty===0){
      setItemCount(itemCount-1);
   
      
    }

    cartInDb();
  
   
  };

  const handleInc = (item) => {

      const addedItem=findArrayElementByName(cartItem,item.name);
      addedItem.qty=addedItem.qty+1;
      cartItem.push();
      setCartItem([...cartItem]);
      setCartItemDisplay(true);
  
   cartInDb();
  
 
  
  };

 
  
  const [cartItemDisplay, setCartItemDisplay] = useState(true);



const [filteredList,setFilteredList]=useState([]);
const [originalList,setOriginalList]=useState(menuList);
const [filterClick,setFilterClick]=useState(false);
// eslint-disable-next-line
let handleFilterList = useCallback((res) =>{
    
    setOriginalList(menuList);
    setFilteredList([]);
    // eslint-disable-next-line
    menuList.filter(name => name.type.includes(res.target.innerText)).map(filteredItem => {
    filteredList.push(filteredItem);
    setOriginalList(filteredList);
    setFilterClick(true)
     
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

          <CategoryFilterList handleFilterList={handleFilterList} menuList={menuList} />
        </Col>
        <Col sm={5}>
        {filterClick=== false ? menuList.map((item,index)=>(<MainMenuCard key={item.id} item={item} handleAddToCart={handleAddToCart} itemCount={itemCount} userId={userId} uId={uId}/>)) :
         originalList.map((item,index)=>(<MainMenuCard key={item.id} item={item} handleAddToCart={handleAddToCart}  itemCount={itemCount}  />))}
        </Col>
        <Col sm={4}>
          {/* Cart Starts Here */}
         
         <CartCard handleInc={handleInc} handleDec={handleDec} itemCount={itemCount} cartItemDisplay={cartItemDisplay} setCartItemDisplay={setCartItemDisplay} cartItem={cartItem} userId={userId} uId={uId}/>
        
        </Col>
      </Row>
      
      </div>
    </div>
  );
}


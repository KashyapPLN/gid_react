import * as React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";
// import menuList from './DessertsData.json';
import { useCallback } from 'react';


export function CategoryFilterList({handleFilterList,menuList}) {
  const rootCategoryList = [
    {
      "dessert_item_name": "Pastries",
      "type":"pastries"
    },

    {
      "dessert_item_name": "Cup Cakes",
      "type" :"cupcakes"
    },

    {
      "dessert_item_name": "Dry Cakes",
      "type" :"drycakes"

    },

    {
      "dessert_item_name": "Smoothies",
      "type" :"smoothies"
    },
    {
      "dessert_item_name": "Frozen",
      "type" : "frozen"
    },
    {
      "dessert_item_name": "Muffins",
      "type" :"muffins"
    },
    {
      "dessert_item_name": "South Indian",
      "type" :"southindian"
    },
    {
      "dessert_item_name": "North Indian",
      "type":"northindian"
    },
    {
      "dessert_item_name": "Fried",
      "type":"fried"
    },
    {
      "dessert_item_name": "Chocolate Filled",
      "type":"chocolate"
    },
    {
      "dessert_item_name": "Candies",
      "type":"candies"
    },
    {
      "dessert_item_name": "Brownies",
      "type":"brownies"
    }
  ];
  let handleFilterList1 = useCallback((filterItem) => handleFilterList(filterItem));

 


const type = menuList.map(t => t.type);


const type_disp= type.filter((t, idx) => 
    type.indexOf(t) === idx)

 
 
 
  return (
    <div>
      <ListGroup className="rootList" defaultActiveKey="#link1">
        {/* {rootCategoryList.map((rItem,index) => <ListGroup.Item key={index}className="itemMainCategory" action onClick={()=>handleFilterList(rItem)}>
          {rItem.dessert_item_name}
        </ListGroup.Item>)} */}
        <ListGroup.Item className="itemMainCategory" action onClick={handleFilterList1}>All Categories</ListGroup.Item>
        {type_disp.map((filterItem,index) => <ListGroup.Item key={index} className="itemMainCategory" action onClick={handleFilterList1}>
          {filterItem}
        </ListGroup.Item>)}
      </ListGroup>
     </div>
  );

}

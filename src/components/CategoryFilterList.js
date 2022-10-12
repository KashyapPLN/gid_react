import * as React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCallback } from 'react';


export function CategoryFilterList({handleFilterList,menuList}) {
 // eslint-disable-next-line
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

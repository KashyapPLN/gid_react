import Button from '@mui/material/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import menuList from './DessertsData.json';


export function Search({ item,itemCount,setItemCount,cartItem,setCartItem }) {

const { id, name, price, pic, category, type, quantitydisplay } = item;
 
  console.log("item is "+item.price)
  const handleAddToCart=(item)=>{
    
    const exists = cartItem.some(v => (v.name === item.name ));

  if(!exists){
   item.qty=item.qty+1;
 cartItem.push(item);
    setCartItem([...cartItem]);

 
 
    setItemCount(itemCount + 1);
 
 
    console.log("item is a"+item.name)
  }
  else{
    const addedItem=findArrayElementByName(cartItem,item.name);
    addedItem.qty=addedItem.qty+1;
    cartItem.push();
    setCartItem([...cartItem]);

  // console.log("Search"+item)
}
  }
  function findArrayElementByName(array, name) {
    return array.find((element) => {
      return element.name === name;
    })
  }
 
  return (
    <div>
      <Row>
        <Col sm={3}></Col>
        <Col sm={5}>
          <Card className="centerMenu mt-5">
            <Card.Header as="h5">{name}</Card.Header>
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <img className="category" src={category} />
                  <p className="item_price">Price : ₹ {price}</p>
                  <p className="item_quantity">Quantity : {quantitydisplay}</p>
                </Col>
                <Col sm={4}>
                  <div className="item_pic_disp"><img className="item_pic" src={pic} /></div>
                  <div className="btn_disp"><Button value={name} onClick={handleAddToCart} variant="contained">Add to Cart</Button></div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </div>
  );










}

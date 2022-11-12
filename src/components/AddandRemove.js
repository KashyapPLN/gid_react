import { Button, Container,TextareaAutosize,TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function AddandRemove() {
    const [id,setId] =useState(0);
    const [name,setName] =useState('');
    const [qtyDisplay,setQtyDisplay] =useState('');
    const [price,setPrice] =useState(0);
    const [pic,setPic] =useState('');
    const [rating,setRating] =useState(0);
    const [category,setCategory] =useState('');
    const [type,setType] =useState('');
    const [qty,setQty] =useState(0);
    const [offer,setOffer] =useState('');
    const [description,setDescription] =useState('');
   
    const [name1,setName1] =useState('');
    const [qtyDisplay1,setQtyDisplay1] =useState('');
    const [price1,setPrice1] =useState(0);
    const [pic1,setPic1] =useState('');
    const [rating1,setRating1] =useState(0);
    const [category1,setCategory1] =useState('');
    const [type1,setType1] =useState('');
   const [qty1,setQty1] =useState(0);
    const [offer1,setOffer1] =useState('');
    const [description1,setDescription1] =useState('');
const [temp,setTemp]=useState(0);
    const [addStatus,setAddStatus]=useState('');
    const [editStatus,setEditStatus]=useState('');
    const [deleteStatus,setDeleteStatus]=useState('');

    const [ isAlertVisible, setIsAlertVisible ] = useState(false);
    
    const [ isAlertVisible2, setIsAlertVisible2 ] = useState(false);
    
    const [ isAlertVisible3, setIsAlertVisible3 ] = useState(false);

    setTimeout(() => {
             setIsAlertVisible(false);
             setIsAlertVisible2(false);
             setIsAlertVisible3(false);
            
               }, 3000);

function addProduct(e){
    fetch(`http://localhost:4000/desserts/${id}`)
    .then((data)=>data.json())
    .then((val)=>setTemp(val.id))
    if(id!==0&&id!==temp){
    const obj={
        id:parseInt(id),
        name:name,        
        quantitydisplay:qtyDisplay,
        price:parseInt(price),
        pic:pic,
        rating:parseInt(rating),
        category:category,
        type:type,
        qty:parseInt(qty),
        offer:offer,
        description:description
}

fetch(`http://localhost:4000/desserts`,{
    method : 'POST',
     body :JSON.stringify([obj]),
    headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
    }).then((data)=>data.json())
    .then((d)=>{console.log("successful",d);setAddStatus(d.acknowledged);})
}
}
function editProduct(e){
    
    if(id!==0){
    const obj={
       
        name:name1,        
        quantitydisplay:qtyDisplay1,
        price:parseInt(price1),
        pic:pic1,
        rating:parseInt(rating1),
        category:category1,
        type:type1,
        qty:parseInt(qty1),
        offer:offer1,
        description:description1
}

fetch(`http://localhost:4000/desserts/${parseInt(id)}`,{
    method : 'PUT',
     body :JSON.stringify(obj),
    headers:{ 'Content-Type': 'application/json',
             'Accept' : 'application/json' }
    }).then((data)=>data.json())
    .then((d)=>{console.log("successful",d.acknowledged);setEditStatus(d.acknowledged);})
}
}
function removeProduct(e){
    if(id!==0){
    fetch(`http://localhost:4000/desserts/${id}`,{method:'DELETE'})
    .then((data)=>data.json())
     .then((res)=>{console.log(res.acknowledged,'deleted');setDeleteStatus(res.acknowledged)})
}
}

function getProduct(){
    fetch(`http://localhost:4000/desserts/${id}`)
    .then((data)=>data.json())
    .then((val)=>{
        setName1(val.name);
        setQtyDisplay1(val.quantitydisplay);
        setPrice1(val.price);
        setPic1(val.pic);
        setRating1(val.rating);
        setCategory1(val.category);
        setType1(val.type);
        setQty1(val.qty);
        setOffer1(val.offer);
        setDescription1(val.description);
    })
    console.log(qtyDisplay)
}


    return (
        <div>
               
      
            <Col md={12} style={{display:'flex',justifyContent:'space-around'}}>
                <Row>
                    <Col md={6}>
            <Container className='mt-5 me-5 mb-5'sx={{borderRight:'solid 0.5px'}}>
            <h4 className='mb-5'>Add Item</h4>  
            <form id='addDessert'>
            <TextField sx={{marginRight:'30px'}} type='number'label='Id' onChange={(e)=>setId(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}} type='text'label='Name'onBlur={(e)=>setName(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}}type='text'label='Display quantity'onBlur={(e)=>setQtyDisplay(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}} type='number' label='Price'onBlur={(e)=>setPrice(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}}type='text'label='Picture'onBlur={(e)=>setPic(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}} type='number'label='Rating'onBlur={(e)=>setRating(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}}type='text'label='Category'onBlur={(e)=>setCategory(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}} type='text'label='Type'onBlur={(e)=>setType(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}}type='number'label='Quantity'onBlur={(e)=>setQty(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}}type='text'label='Offer'onBlur={(e)=>setOffer(e.target.value)}/><br/>
            <TextareaAutosize placeholder='Description'style={{width:'95%',marginBottom:'30px'}} onChange={(e)=>setDescription(e.target.value)}/><br/>
            <Button className='mb-3' variant='contained'color='success'onClick={(e)=>{addProduct(e);document.getElementById("addDessert").reset();setIsAlertVisible(true);}}>Add Item</Button>
            </form> 
            {addStatus===true && isAlertVisible===true? <Alert variant='success'>Product added successfully</Alert>:addStatus===false && isAlertVisible===true ?<Alert variant='danger'>product doesn't exist</Alert> : null}
           
            </Container>
            </Col>
            <Col md={6}>
            <Container className='mt-5'>
            <h4 className='mb-5'>Edit Item</h4>  
            <form id='editDessertId'>
            <TextField sx={{marginRight:'30px',marginBottom:'30px'}} type='number'label='Enter Id' onChange={(e)=>setId(e.target.value)}/>
            <Button variant='contained'onClick={getProduct}>submit id</Button><br/>
            </form>
            <form id='editDessert'>
            <TextField sx={{marginRight:'30px'}} type='text' value={name1} label='Name'onChange={(e)=>setName1(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}} type='text' value={qtyDisplay1} label='Display quantity'onChange={(e)=>setQtyDisplay1(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}} type='number' value={price1} label='Price'onChange={(e)=>setPrice1(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}}type='text' value={pic1} label='Picture'onChange={(e)=>setPic1(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}} type='number' value={rating1} label='Rating'onChange={(e)=>setRating1(e.target.value)}/>
            <TextField sx={{marginBottom:'30px'}}type='text' value={category1} label='Category'onChange={(e)=>setCategory1(e.target.value)}/><br/>
            <TextField sx={{marginRight:'30px'}} type='text' value={type1} label='Type'onChange={(e)=>setType1(e.target.value)}/>
            {/* <TextField sx={{marginRight:'30px'}}type='number' value={qty} label='Quantity'onBlur={(e)=>setQty(e.target.value)}/> */}
            <TextField sx={{marginBottom:'30px'}}type='text' value={offer1} label='Offer'onChange={(e)=>setOffer1(e.target.value)}/><br/>
            <TextareaAutosize placeholder='Description'style={{width:'95%',marginBottom:'30px'}} value={description1} onChange={(e)=>setDescription1(e.target.value)}/><br/>
            <Button className='mb-3' variant='contained'onClick={(e)=>{editProduct(e);document.getElementById("editDessertId").reset();document.getElementById("editDessert").reset();setIsAlertVisible2(true);setTimeout(() => {window.location.reload();}, 3000);}}>Edit Item</Button>
            </form>
            {editStatus===true && isAlertVisible2===true ? <Alert variant='success'>Product details modified successfully</Alert>:editStatus===false && isAlertVisible2===true ? <Alert variant='danger'>product doesn't exist</Alert>:null}
           
            </Container>   
            </Col>
            </Row>
            </Col>
            <hr/>
            <Container className='mt-5 me-2 mb-5'>
            <h4 className='mb-5'>Remove Item</h4>
            <form id='deletebyId'>
            <TextField sx={{marginBottom:'30px'}} type='text'label='Id'onBlur={(e)=>setId(e.target.value)}/><br/>
            <Button className='mb-3' variant='contained' color='error' onClick={(e)=>{removeProduct(e);document.getElementById("deletebyId").reset();setIsAlertVisible3(true);}}>Remove Item</Button>
            </form>
            {deleteStatus===true && isAlertVisible3===true ? <Alert style={{width:'300px'}} variant='success'>Product deleted successfully</Alert>:deleteStatus===undefined && isAlertVisible3===true? <Alert style={{width:'300px'}} variant='danger'>product doesn't exist</Alert>:null}
            </Container>
            
        </div>
    );
}

export default AddandRemove;
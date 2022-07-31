import Cards from './components/Cards';
import ItemMenu from './components/ItemMenu';
import Slides from './components/Slides';
import Login from './components/Login';
import './App.css';
import logo from './logo.png'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import sweets from './sweets.png'

import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import menuList from './components/DessertsData.json';
import { useState,useEffect } from 'react';
import { Toolbar } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import HelpFaq from './components/Help';
import UserDetails from './components/UserDetails';
import Address from './components/Address';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { CartCard } from './components/CartCard';
import Checkout from './components/Checkout';
import { FinalCart } from './components/Checkout';
import DessertMenu from './components/DessertMenu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Search } from './components/Search';
import { IncDecCounter } from './components/IncDecCounter';



const topPicks=[
  {
    "id":"1",
    "name": "Pastries",
    "pic":"https://images.pexels.com/photos/2147834/pexels-photo-2147834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "rating": "4",
    "deliverytime": "30 min",
    "pricefortwo": "₹200 For two",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"2",
    "name": "Donuts",
    "pic":"https://62be89f511735611ddffc9ef--effulgent-cassata-437a9a.netlify.app/dc2.jpeg",
    "rating": "3.5",
    "deliverytime": "49 min",
    "pricefortwo": "₹499 For four",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"3",
    "name": "Macaroons",
    "pic":"https://62be89f511735611ddffc9ef--effulgent-cassata-437a9a.netlify.app/dc3.jpeg",
    "rating": "3.6",
    "deliverytime": "28 min",
    "pricefortwo": "₹449 For two",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"4",
    "name": "Fruit cakes",
    "pic":"https://62be89f511735611ddffc9ef--effulgent-cassata-437a9a.netlify.app/dc4.jpeg",
    "rating": "4",
    "deliverytime": "39 min",
    "pricefortwo": "₹299 For two",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"5",
    "name": "Marshmellows",
    "pic":"https://images.pexels.com/photos/89731/pexels-photo-89731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "rating":"2.89" ,
    "deliverytime": "45 min",
    "pricefortwo": "₹249 For four",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"6",
    "name": "Sweets",
    "pic":"https://images.unsplash.com/photo-1609540969455-ad5ea19be121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "rating": "4",
    "deliverytime": "52 min",
    "pricefortwo": "₹649 For four",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"7",
    "name": "Burfis",
    "pic":"https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "rating": "3",
    "deliverytime": "25 min",
    "pricefortwo": "₹549 For three",
    "offer": "50% off | Use WELCOME50"
  },
  {
    "id":"8",
    "name": "Gulab Jamuns",
    "pic":"https://images.freeimages.com/images/large-previews/095/gulab-jamun-1637925.jpg",
    "rating": "4.3",
    "deliverytime": "33 min",
    "pricefortwo": "₹399 For two",
    "offer": "50% off | Use WELCOME50"
  }
]

function App() {
  const navigate=useNavigate();

  const [show, setShow] = useState(false);
  const [showPop, setShowPop] = useState(true);

// const hideNavCart = () => {
//   setShowPop(!showPop);
// }
  //ItemMenu States-----------------------------------------------//
  const [itemCount, setItemCount] = useState(0);
  const [cartItem,setCartItem]=useState([]);
// --------------------------------------------------//

 const [searchVal, setSearchVal] = useState();
 const handleInput = (e) => {
  
  setSearchVal(e.target.value);
  
  
    }
    // console.log(searchVal);
    const handleClearBtn = () => {
      
      setSearchVal('');
      setOriginalList([]);
      setFilteredList([]);
      

    }
    const [filteredList,setFilteredList]=useState([]);
    const [originalList,setOriginalList]=useState([]);
    const filteredProducts = (searchVal) => {
      setOriginalList([]);
      setFilteredList([]);
      
      menuList.filter(product => (product.name.toLowerCase().includes(searchVal))||(product.type.toLowerCase().includes(searchVal))).map(filteredItem => {
      filteredList.push(filteredItem);
      setOriginalList(filteredList); });
      
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div className="App">
     
 <AppBar className="headmenu" sx={{ height :"80px", padding: "10px",position: "static"}}>
  <Toolbar>
   <Button className="app-logo"
   onClick={()=>navigate('/')}>
  <img className="gidlogo"src={sweets} alt="sweets" />
  <img src={logo} className="donut" alt="logo" />
  </Button>
  <div className='input-wrap'>
   <SearchIcon/>
   <label for="product-search" id="input-label">Product Search</label>
 <input type="text" className="searchBar" placeholder='Search For Your Cravings' value={searchVal} color='inherit'  onChange={(e)=>{handleInput(e);navigate('/search');filteredProducts(searchVal)}} />
 <ClearIcon className="clear" onClick={(e)=>{handleClearBtn(e);navigate('/');}}/>
</div>
  </Toolbar>
  <Toolbar className='head-end'>
   
    <Button color="inherit" onClick={handleShow}>Log in/Sign Up</Button>
    <Button color="inherit" onClick={()=>navigate('/menu')}>Menu</Button>
    <Button color="inherit" onClick={()=>navigate('/help')}>Help</Button>
    <Button color="inherit" onClick={()=>navigate('/user')}>User</Button>
    <Button color="inherit" onClick={()=>navigate('/dessert')}>Dessert</Button>

    {['bottom'].map((placement) => (
       <OverlayTrigger
          trigger="click"
          key={placement}
          rootClose
          placement={placement}
          overlay={
            <Popover className='popover' id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">Cart</Popover.Header>
              <Popover.Body>
                <Col sm={12}>
                 
              {cartItem.map((item)=> <div className="navCart">
              <Col sm={8}>
                <p style={{fontWeight:"bold", paddingRight:"30px"}}>{item.name} x {item.qty}</p>
                </Col>
                {/* <Col sm={3}>
                <p style={{textAlign:"center",}}>{item.qty} qty</p>
               </Col> */}
               <Col sm={4}>
                <p style={{textAlign:"end",fontWeight:"bold"}}>₹ {item.qty*item.price}.00</p>
               </Col>
              </div>)}
              </Col>
              <hr />
              <div className="navCTotal">
                <p style={{textAlign:"start",fontWeight:"bold"}}>Total </p>
                <p style={{textAlign:"end",fontWeight:"bold"}}>₹ {(cartItem.reduce((total, item) => total + item.qty * item.price, 0))}.00</p></div>
                <hr />
                <Button color="success" variant="contained"className='navCheck' onClick={()=>{navigate('/checkout');}}>CHECKOUT</Button>
              </Popover.Body>
            </Popover> 
          }
        >
    <IconButton aria-label="cart-basket" color="inherit" onClick=""><Badge badgeContent={itemCount} color="error"><ShoppingCartIcon sx={{marginRight:"10px"}}/></Badge></IconButton>
    </OverlayTrigger> ))}
    </Toolbar>
  </AppBar> 

  {/* <Button variant="primary" onClick={handleShow} className="me-2">
        Login
      </Button> */}
      <Offcanvas className="login-signup" show={show} onHide={handleClose} placement="end" responsive="lg">
        <Offcanvas.Header closeButton >
          {/* <Offcanvas.Title>Login/SignUp</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Login />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
   
   
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/menu" element={<ItemMenu itemCount={itemCount} setItemCount={setItemCount} cartItem={cartItem} setCartItem={setCartItem}/>} />
    <Route path="/help" element={<HelpFaq />} />
    <Route path="/user" element={<UserDetails />} />
    <Route path="/user/addresses" element={<Address />} />
    <Route path="/cart" element={<CartCard />} />
    <Route path="/checkout" element={<Checkout itemCount={itemCount} setItemCount={setItemCount} cartItem={cartItem} setCartItem={setCartItem}/>} />
    <Route path="/dessert" element={<DessertMenu />} />
    <Route path="/search" element={originalList.map((item)=><Search searchVal = {searchVal} item={item} itemCount={itemCount} setItemCount={setItemCount} cartItem={cartItem} setCartItem={setCartItem}/>)} />
    {/* <Route path="/navcart" element={<NavCart itemCount={itemCount} setItemCount={setItemCount} cartItem={cartItem} setCartItem={setCartItem} />} /> */}
    </Routes>
   
    </div>
  );
}

export default App;
function Home(){
  const navigate=useNavigate();
  // const [ratingFilter,setRatingFilter]=useState(false);
  // const [priceFilter,setPriceFilter]=useState(false);
  return(
  <div>  
  <Slides /> 
  <div className="text-center mt-4"> <h4>Top Rated</h4>
  {/* <div className="text-end mt-4 custom-filters"><FilterAltIcon color='primary'/><Button variant="text" onClick={()=>setRatingFilter(true)}>Top Rated</Button>
  <Button variant="text" onClick={()=>setPriceFilter(true)}>Price: High to Low</Button>
  <Button variant="text" onClick={()=>setPriceFilter(true)}>Price: Low to High</Button>
  </div> */}
  </div>
<div className="tpickslist">  
{menuList.filter((value)=>value.rating>=4).map((topPicks, index) => 
    <Cards key={index} homemenu={topPicks} id={topPicks.id} />)}
    {/* {topPicks.map((topPicks, index) => 
    <Cards key={index} homemenu={topPicks} id={topPicks.id} />)}  */}
    </div>  
    <div  className="explore">
     <Button variant="outlined" onClick={()=>navigate('/menu')}>Explore Menu</Button>
     </div>
     </div>
  );
}



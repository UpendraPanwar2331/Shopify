
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import NotFound from "./NotFound";
import ProductDetail from "./Component/ProductDetail";
import Cart from "./Component/Cart";
import CheckOut from "./Component/CheckOut";
import OrderDetails from "./Component/OrderDetails";
import HomeReplace from "./Component/HomeReplace";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Messho from "./Component/Messho";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      
      <Routes>
       

       <Route path="/" element={<Home/>}/>
        <Route path="/productdetail/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="orderdetail" element={<OrderDetails/>}/>
        <Route path="/homeReplace/:category" element={<HomeReplace />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/meesho" element={<Messho/>}/>
       
       <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

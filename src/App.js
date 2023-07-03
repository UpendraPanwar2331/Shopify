
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Menubar from "./Menubar";
import NotFound from "./NotFound";
import ProductDetail from "./Component/ProductDetail";
import Cart from "./Component/Cart";
import CheckOut from "./Component/CheckOut";
import OrderDetails from "./Component/OrderDetails";

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
       
       <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

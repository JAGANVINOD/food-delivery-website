import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Placeorder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Loginpopup from "./Components/LoginPopup/Loginpopup";
import Verify from "./Pages/Verify/Verify";
import MyOrders from "./Pages/Myorders/MyOrders";




function App() {

  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
     
        {showLogin ? <Loginpopup setshowLogin={setshowLogin} /> : <></>}
       
        <div className="app">
          <Navbar setshowLogin={setshowLogin} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/myorders" element={<MyOrders/>}/>
          </Routes>

        </div>
        <Footer />
    
    </>
  )
}


export default App;

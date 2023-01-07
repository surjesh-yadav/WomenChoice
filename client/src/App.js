import './App.css';
import Home from './components/Home';
// import Product from './components/mobile';
import Product from './components/Jeans'
import {Route ,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Top } from './components/Top';
import Kurti from './components/Kurti';
import JeansDisplay from './components/JeansDisplay';
import TopDisplay from './components/TopDisplay';
import KurtiDisplay from './components/KurtiDisplay';
import Cart from "./components/cart";
import Checkout from './components/Checkout';
import { Payment } from './components/Payment';
import Login from './buttons/Login';
import SignUp from './buttons/SignUp';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Paymentdone } from './components/Paymentdone';


function App() {
  const [log,setLog] = useState(false);
  useEffect(() => {
    var a = JSON.parse(localStorage.getItem("app")) || null;
    if(a){
      setLog(true)
    }
  })
  return (
    <div className='App'>
    <Navbar setLog={setLog} log={log}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login setLog={setLog}/>} />
      <Route path='/Signup' element={<SignUp/>} />

      <Route path='/jeans' element={<Product/>} />
      <Route path='/jeans/:id' element={<JeansDisplay log={log}/>} />

      <Route path='/tops' element={<Top/>} />
      <Route path='/tops/:id' element={<TopDisplay log={log}/>} />

      <Route path='/kurtis' element={<Kurti/>} />
      <Route path='/kurtis/:id' element={<KurtiDisplay log={log}/>} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Payment" element={<Payment/>} />
      <Route path="/Paymentdone" element={<Paymentdone/>} />


    </Routes> 
    <Footer></Footer>

    </div>
  );
}

export default App;

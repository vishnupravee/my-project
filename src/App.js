import logo from './logo.svg';
import './App.css';
import Signup from './final project/Signup';
import Log from './final project/Log';
import Routerr from './final project/Routerr';
import Api from './apicalling/Api';
import Apiadmin from './apicalling/Apiadmin';
import Navabar from './apicalling/Navabar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logadmin from './apicalling/Logadmin';
import Api1 from './apicalling/Api1';
import Adddata from './apicalling/Adddata';
import Api2 from './apicalling/Api2';
import Register from './apicalling/Register';
import Buyform from './apicalling/Buyform';
import Costomar from './apicalling/Costomar';
import Payment from './apicalling/Payment';
import Confirm from './apicalling/Confirm ';

import Payform from './apicalling/Payform';
import Cart from './apicalling/Cart';
import Viewcart from './apicalling/Viewcart';


function App() {
  return (
    <div className="App">
       <Navabar />
       
       <BrowserRouter> 
       <Routes>
         <Route path='/' element={<Log />}/>
        <Route path='/sign' element={<Signup />}/>
        <Route path='/main' element={<Api />}/>
        <Route path='/table' element={<Apiadmin />}/>
        <Route path='/admin' element={<Logadmin />}/>
        <Route path='/start/:brandname' element={<Api1 />}/>
        <Route path='/add' element={<Adddata />}/>
        <Route path='/Kart/:Modalname' element={<Api2 />}/>
        <Route path='/user' element={<Register />}/>
        <Route path='/buy/:Spareparts'  element={<Buyform />}/>
        <Route path='/core' element={<Costomar />}/>
        <Route path='/pay' element={<Payment />}/>
        <Route path='/order' element={<Confirm />}/>
        <Route path='/jar/:Spareparts' element={<Cart />}/>
        <Route path='/view' element={<Viewcart />}/>
        {/* <Route path='/cart/:Spareparts' element={<Payform />}/> */}
       </Routes>
       </BrowserRouter>  
    </div> 
  );
}

export default App;

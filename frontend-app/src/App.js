import logo from './logo.svg';

import bootstrap from 'bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home,Login,Registration} from "../src/components";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Prodects from './component/Prodects';
import Navebar from './component/Navebar';
import Edit from './component/Edit';
import Create from './component/Create';

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navebar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Prodects setId={setId} />} />
          <Route path='/edit/:id' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Welcompage from './firstpage/Welcompage';
import Categorys from './components/Categorys';
import Addcatrgory from './firstpage/Addcatrgory';
import Editcategory from './firstpage/Editcategory';

function App() {
  return (
    <Router>
      <div>  
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
          {/* <Route path="/frontpage" element={<Welcompage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categorys />} />
          <Route path="/add-category" element={<Addcatrgory />} />
          <Route path="/edit-category" element={<Editcategory />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

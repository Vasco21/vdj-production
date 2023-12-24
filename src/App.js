import React from 'react';
import './App.css';
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Vdj-Production.jsx';
import Arstists from './pages/Arstists.jsx';
import Analytics from './pages/Release.jsx';
import Comment from './pages/Events.jsx';
import Product from './pages/Music.jsx';
import ProductList from './pages/Social.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vdj-artists" element={<Arstists />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
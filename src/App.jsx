//eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import "./App.css";
//eslint-disable-next-line
import { Navbar, Products } from "./components";
import { Home, AboutUs, GetInTouch, Offers, Privacy, Productos } from './pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import commerce from './lib/Commerce';

const App = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = () => {
  //   commerce.products.list().then((products) => {
  //     setProducts(products.data);
  //   }).catch((error) => {
  //     console.log('There was an error fetching the products', error)
  //   });
  // }

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        <Route path="/policy" element={<Privacy />} />
      </Routes>
    </Router>
    {/* <Products products={products} /> */}
  </>
  );
};

export default App;
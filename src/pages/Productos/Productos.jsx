import React, { useState, useEffect } from 'react'
import { Products } from '../../components';
import commerce from '../../lib/Commerce'

function Productos() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = () => {
      commerce.products.list().then((products) => {
        setProducts(products.data);
      }).catch((error) => {
        console.log('There was an error fetching the products', error)
      });
    }

    return <div className="productos flex flex-col">
      Productos
      <Products products={products} />
    </div>;
  }
  
  export default Productos;
  
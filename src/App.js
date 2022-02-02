import './App.css';
import ProductItem from './components/ProductItem'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('https://dummyjson.com/products');
      
      setProducts(results.data.products);
      console.log(results.data.products);
    }

    getData();
  }, []);

  return (
    <div className="productContainer">      

      { products.map(p => <ProductItem name={p.title} image={p.thumbnail} price={p.price}/>) }
    
    </div>
  );
}

export default App;

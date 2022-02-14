import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListView from './components/ProductListView';
import EditorView from './components/EditorView'

function App() {
  const [editorModeOn, setEditorModeOn] = useState(false);
  const [products, setProducts] = useState([{
    id: 1,
    title: "Makkara",
    price: "100",
    thumbnail: null
  },
  {
    id: 2,
    title: "Tietokone",
    price: "200",
    thumbnail: null
  },
  {
    id: 3,
    title: "Auto",
    price: "500",
    thumbnail: null
  }
  
  ]);

  const onItemDelete = (item) => {
    let newProds = [...products];
    let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
    newProds.splice(deletedItemIndex, 1);
    setProducts(newProds);
  }

  /*useEffect(() => {
    const getData = async () => {
      const results = await axios.get('https://dummyjson.com/products');
      
      setProducts(results.data.products);
      console.log(results.data.products);
    }

    getData();
  }, []);
  */
  let output = <ProductListView products={products} />;
  if( editorModeOn == true ) {
    output = <EditorView products={products} onItemDelete={ onItemDelete }/>;
  }

  return (
    <div>
      <button onClick={ () => setEditorModeOn(!editorModeOn) }>Admin Mode Toggle</button>
      { output }
    </div>
    
  );
}

export default App;

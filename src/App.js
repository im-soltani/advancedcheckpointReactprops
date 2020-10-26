import React from 'react';
import ProductTable from './components/ProductTable';
import './App.css';

const products = [
  { name: "produit1", price: 50 , category: "Electronics"},
  { name: "produit2",  price: 30 ,category: "Clothes"}
  
];
function App() {
  return (
    <div className="App">
      
      <ProductTable  products={products} />
       
    </div>
  );
}

export default App;

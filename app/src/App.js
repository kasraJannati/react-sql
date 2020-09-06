import React,{useEffect,useState} from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState('sample product');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () =>{

    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(({data}) => {


      setProducts(data);

    })
    .catch(err => console.log(err))
  }

  const addProduct = () =>{
    fetch(`http://localhost:4000/products/add?name=${name}&price=${price}`)
    .then(getProducts) 
    .catch(err => console.log(err))
  }

  console.log('asdsa')
  return (
    <div className="App">

      <ul>
        {products.map((product) => (
          <li key={product.product_id}>Name: {product.name} - Price: {product.price}!</li>
        ))}
      </ul>

      <div>
        <input 
          value={name}
          onChange={e=>setName(e.target.value)}>
        </input>
        <input 
           value={price}
          onChange={e=>setPrice(e.target.value)}>   
        </input>
        <button onClick={addProduct}>add Product</button>
      </div>
      
    </div>
  );
}

export default App;

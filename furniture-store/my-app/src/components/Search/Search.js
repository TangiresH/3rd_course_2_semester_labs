import React, { useState } from 'react';
import './Search.css';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const searchProducts = async (query) => {
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    setProducts(data.products);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    searchProducts(query);
  };

  return (
    <section id='search' className='search-section'>
        <div id='heading-subheading'>
            <h1 id='main-title'>Меблі для сучасного житла: мінімалізм з комфортом</h1>
            <h3 id='subtitle'>Легко та швидко зробіть свою кімнату максимально мінімалістичною та сучасною!</h3>
        </div>
        <input
            type="text"
            id="search-bar"
            placeholder="Пошук меблів..."
            value={query}
            onChange={handleInputChange}
        />
        <div id="product-list">
            {products.map((product) => (
            <div key={product.id} className="product-item">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
            ))}
        </div>
        </section>
  );
};

export default SearchBar;

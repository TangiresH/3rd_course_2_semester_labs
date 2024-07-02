import React, { useState, useEffect } from 'react';
import { searchProducts } from '../API/searchProducts';
import './Search.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  useEffect(() => {
    if (query.length > 0) {
      const results = searchProducts(query);
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query]);

  const handleProductClick = (product) => {
    const productSection = document.getElementById(product.type);
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='search' className='search-section'>
      <div id='heading-subheading'>
        <h1 id='main-title'>Меблі для сучасного житла: мінімалізм з комфортом</h1>
        <h3 id='subtitle'>Легко та швидко зробіть свою кімнату максимально мінімалістичною та сучасною!</h3>
      </div>
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Пошук меблів..."
          value={query}
          onChange={handleInputChange}
        />
        <button id="search-button">
          <img src="/image-search.png" alt="Search" className="search-icon" />
        </button>
      </div>
      {filteredProducts.length > 0 && (
        <div id="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;

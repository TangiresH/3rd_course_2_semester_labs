import React, { useState, useEffect, useContext } from 'react';
import { searchProducts } from '../API/searchProducts';
import './Search.css';
import CartContext from '../CartContext/CartContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

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

  const handleAddToCart = (product) => {
    addToCart(product);
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
              <img src={product.image} alt={product.name} className="product-image-input" />
              <div className="product-info-input">
                <h3 className="product-name-input">{product.name}</h3>
                <p className="product-description-input">{product.description}</p>
                <p className="product-price-input">{product.price}</p>
              </div>
              <button className="add-to-cart-button-input" onClick={() => handleAddToCart(product)}>+</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;

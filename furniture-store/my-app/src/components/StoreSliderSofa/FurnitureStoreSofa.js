import React, { useContext } from 'react';
import Slider from 'react-slick';
import './FurnitureStoreSofa.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CartContext from '../CartContext/CartContext';
import products from '../ProductsList/ProductsList';


const FurnitureStoreSofa = () => {
  const { addToCart } = useContext(CartContext);
  const sofaProducts = products.filter(product => product.type === 'sofa');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="furniture-store-sofa" className="page-section">
      <h2>Дивани</h2>
      <Slider {...settings}>
        {sofaProducts.map((product) => (
          <div key={product.id} className="product-slide">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <p className="product-price">{product.price}</p>
                  <button className="add-to-cart-button" onClick={() => addToCart(product)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FurnitureStoreSofa;

import React, { useContext } from 'react';
import Slider from 'react-slick';
import './FurnitureStoreChairs.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CartContext from '../CartContext/CartContext';


const FurnitureStoreChairs = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
        id: 1,
        name: 'Стілець Konnie Екохутро Білий',
        description: 'Стильне крісло з трендовим дизайном, зручним сидінням та м\'якою оббивкою зі штучного хутра, що стане окрасою Вашого інтер\'єру.',
        price: '11078 ₴',
        image: '/chair-1.jpg',
        type: 'chair',
    },
    {
        id: 2,
        name: 'Стілець Lilu Сірий',
        description: 'Затишне крісло з актуальним дизайном, м\'яким сидінням та приємною на дотик велюровою оббивкою, що стане чудовим доповненням Вашого інтер\'єру.',
        price: '3499 ₴',
        image: '/chair-2.jpg',
        type: 'chair',
    },
    {
        id: 3,
        name: 'Крісло Fly CF C 11, black, OH 5',
        description: 'Стильне та практичне крісло з комфортним сидінням, різними варіантами оббивки та зручними підлокітниками, що чудово доповнить інтер\'єр Вашої вітальні.',
        price: '2484 ₴',
        image: '/chair-3.jpg',
        type: 'chair',
    },
    {
        id: 4,
        name: 'Стілець Praga Eco Wood Чорний',
        description: 'Оригінальне крісло з незвичайним дизайном, комфортним сидінням та якісною оббивкою, що стане окрасою Вашого інтер\'єру.',
        price: '1887 ₴',
        image: '/chair-4.jpg',
        type: 'chair',
    },
    {
        id: 5,
        name: 'Стілець M-140 Білий',
        description: 'Сучасне крісло з комфортним сидінням, оббивкою з букле та елегантними чорними ніжками, що стане стильним доповненням Вашого інтер\'єру.',
        price: '3990 ₴',
        image: '/chair-5.jpg',
        type: 'chair',
    },
    {
        id: 6,
        name: 'Стілець M-76 Попелястий',
        description: 'М\'які та стильні стільці для Вашого комфорту та затишку в будь-якому інтер\'єрі.',
        price: '3150 ₴',
        image: '/chair-6.jpg',
        type: 'chair',
    },
  ];

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
    <section id="furniture-store-chairs" className="page-section">
      <h2>Стільці</h2>
      <Slider {...settings}>
        {products.map((product) => (
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

export default FurnitureStoreChairs;

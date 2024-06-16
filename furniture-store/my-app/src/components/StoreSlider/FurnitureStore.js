import React from 'react';
import Slider from 'react-slick';
import './FurnitureStore.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FurnitureStore = () => {
  const products = [
    {
      id: 1,
      name: 'Софа Лучіано Сірий',
      description: 'Сучасний диван з елегантним дизайном, м\'якими сидінням і спинкою, лляною оббивкою та міцним дерев\'яним каркасом.',
      price: '27510 грн',
      image: '/sofa-1.jpg',
    },
    {
      id: 2,
      name: 'Софа Оскар Айворі',
      description: 'Сучасний диван з лаконічним дизайном, м\'якими сидінням і спинкою, знімними подушками, меблевою оббивкою та міцним дерев\'яним каркасом на пластикових ніжках.',
      price: '47250 грн',
      image: '/sofa-2.jpg',
    },
    {
      id: 3,
      name: 'Софа Лучіано Чорнильно-синій',
      description: 'Сучасний диван з елегантним дизайном, м\'якими сидінням і спинкою, лляною оббивкою та міцним дерев\'яним каркасом',
      price: '27510 грн',
      image: '/sofa-3.jpg',
    },
    {
      id: 4,
      name: 'Диван Weekend Austin 21 Black, Чорний',
      description: 'Сучасне крісло з м\'яким сидінням, італійським текстилем, металевим каркасом і можливістю фарбування за RAL.',
      price: '29500 грн',
      image: '/sofa-4.jpg',
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
    <section id="furniture-store" className="page-section">
      <h2>Дивани</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FurnitureStore;

import React from 'react';
import Slider from 'react-slick';
import './FurnitureStoreWardrobe.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FurnitureStoreWardrobe = () => {
  const products = [
    {
        id: 1,
        name: 'Шафа-купе Luna 2,0м Мат Лава, Дзеркало',
        description: 'Універсальні відтінки підходять під будь-який інтер\'єр. Корпус з ламінованої ДСП 16 мм, фасад із трьохшаровим глянцевим покриттям. З\'єднання деталей ексцентриковою стяжкою (MINIFIX).',
        price: '15114 ₴',
        image: '/wardrobe-1.jpg',
    },
    {
        id: 2,
        name: 'Шафа Nicky 4дв без дзеркал Білий',
        description: 'мінімалістичний дизайн, білі глянцеві фасади, корпус з ламінованої ДСП 16 мм під благородне дерево. Трьохшарове глянцеве покриття фасаду, висушене УФ-променями. З\'єднання ексцентриковою стяжкою (MINIFIX).',
        price: '11973 ₴',
        image: '/wardrobe-2.jpg',
    },
    {
        id: 3,
        name: 'Шафа Asсet ДСП Дуб бароко бурштиновий',
        description: 'Стильна шафа в сучасному стилі з металевою основою. Дві дверцяти, штанга для одягу, дві полиці. Корпус з ламінованої ДСП, чорні пластикові ручки. Доступна в 5 кольорах.',
        price: '6126 ₴',
        image: '/wardrobe-3.jpg',
    },
    {
        id: 4,
        name: 'Шафа Ramona 6дв Мат Лава, Дуб Крафт',
        description: 'Шафа з ексклюзивним дизайном у приємних відтінках. Матове покриття, стійке і легке в догляді. Корпус із ламінованої ДСП 16 мм. Фасад із трьохшаровим глянцевим покриттям, висушеним УФ-променями.',
        price: '17826 ₴',
        image: '/wardrobe-4.jpg',
    },
    {
        id: 5,
        name: 'Шафа-купе Ramona 2,5м Мат Лава, Дуб Крафт',
        description: 'Стильна шафа в сучасному стилі з металевою основою. Дві дверцяти, штанга для одягу, дві полиці. Корпус з ламінованої ДСП, чорні пластикові ручки. Доступна в 5 кольорах.',
        price: '15512 ₴',
        image: '/wardrobe-5.jpg',
    },
    {
        id: 6,
        name: 'Шафа Quadro 6дв Дуб Фрегат',
        description: 'Шафа в стилі лофт з міцним корпусом і фасадом з ламінованої ДСП (16 мм). Темний відтінок дерева Дуб Фрегат, чорна алюмінієва ручка. Надійна конструкція з дзеркалами на центральній частині фасаду.',
        price: '13514 ₴',
        image: '/wardrobe-6.jpg',
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
    <section id="furniture-store-wardrobe" className="page-section">
      <h2>Шафи</h2>
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
                  <button className="add-to-cart-button">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FurnitureStoreWardrobe;

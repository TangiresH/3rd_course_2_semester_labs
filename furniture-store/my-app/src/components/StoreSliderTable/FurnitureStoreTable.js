import React from 'react';
import Slider from 'react-slick';
import './FurnitureStoreTable.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FurnitureStoreTable = () => {
  const products = [
    {
        id: 1,
        name: 'Стіл Bryan Wood D80 Чорний',
        description: 'Елегантний та практичний стіл з лакованою круглою стільницею з МДФ та витонченими ніжками з бука, що ідеально підходить для будь-якого інтер\'єру.',
        price: '3299 ₴',
        image: '/table-1.jpg',
    },
    {
        id: 2,
        name: 'Стіл TML-970 160x90 Каса голд',
        description: 'Розкішний розкладний стіл з керамічною стільницею, що вражає сучасним дизайном, практичністю та функціональністю.',
        price: '39270 ₴',
        image: '/table-2.jpg',
    },
    {
        id: 3,
        name: 'Стіл T-325 D90 Айс грей, Чорний',
        description: 'Стильний та практичний стіл з круглою стільницею та опорою оригінальної форми, що стане окрасою Вашого сучасного інтер\'єру.',
        price: '6510 ₴',
        image: '/table-3.jpg',
    },
    {
        id: 4,
        name: 'Стіл TML-880 180x90 Мармур',
        description: 'Сучасне крісло з м\'яким сидінням, італійським текстилем, металевим каркасом і можливістю фарбування за RAL.',
        price: '43470 ₴',
        image: '/table-4.jpg',    
    },
    {
        id: 5,
        name: 'Журнальний стіл CL-2 55x55 Прозорий',
        description: 'Елегантний стіл з квадратною стільницею з розжареного скла та опорами оригінальної форми з металу золотого кольору, що поєднує в собі стиль, функціональність та довговічність.',
        price: '6552 ₴',
        image: '/table-5.jpg',
    },
    {
        id: 6,
        name: 'Журнальний стіл CP-1 80x80 Тонований',
        description: 'Елегантний стіл з квадратною стільницею з розжареного скла та опорами оригінальної форми з металу золотого кольору, що поєднує в собі стиль, функціональність та довговічність.',
        price: '6510 ₴',
        image: '/table-6.jpg',
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
    <section id="furniture-store-table" className="page-section">
      <h2>Столи</h2>
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

export default FurnitureStoreTable;

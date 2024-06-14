import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <section id="home">
        <h1>Меблі</h1>
        <p>Це основний розділ про меблі.</p>
      </section>
      <section id="wardrobe">
        <h2>Шафа</h2>
        <p>Інформація про шафи.</p>
      </section>
      <section id="sofa">
        <h2>Диван</h2>
        <p>Інформація про дивани.</p>
      </section>
      <section id="chairs">
        <h2>Стільці</h2>
        <p>Інформація про стільці.</p>
      </section>
      <section id="table">
        <h2>Стіл</h2>
        <p>Інформація про столи.</p>
      </section>
      <section id="about">
        <h2>Акції</h2>
        <p>Інформація про акції.</p>
      </section>
      <section id="services">
        <h2>Про нас</h2>
        <p>Інформація про нас.</p>
      </section>
      <section id="contact">
        <h2>Контактна інформація</h2>
        <p>Як з нами зв'язатися.</p>
      </section>
    </div>
  );
}

export default App;

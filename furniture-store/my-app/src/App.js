import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import SearchBar from './components/Search/Search';
import FurnitureStoreSofa from './components/StoreSliderSofa/FurnitureStoreSofa';
import FurnitureStoreWardrobe from './components/StoreSliderWardrobe/FurnitureStoreWardrobe';


function App() {
  return (
    <div className="App">
      <Menu />
      <SearchBar />
      <Services />
      <FurnitureStoreSofa />
      <FurnitureStoreWardrobe />
      <section id="chairs" className="page-section">
        <h2>Стільці</h2>
        <p>Інформація про стільці.</p>
      </section>
      <section id="table" className="page-section">
        <h2>Стіл</h2>
        <p>Інформація про столи.</p>
      </section>
      <section id="about" className="page-section">
        <h2>Акції</h2>
        <p>Інформація про акції.</p>
      </section>
      <section id="contact" className="page-section">
        <h2>Контактна інформація</h2>
        <p>Як з нами зв'язатися.</p>
      </section>
    </div>
  );
}

export default App;

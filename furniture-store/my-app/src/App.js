import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import SearchBar from './components/Search/Search';
import FurnitureStoreSofa from './components/StoreSliderSofa/FurnitureStoreSofa';
import FurnitureStoreWardrobe from './components/StoreSliderWardrobe/FurnitureStoreWardrobe';
import FurnitureStoreChairs from './components/StoreSliderChairs/FurnitureStoreChairs';
import FurnitureStoreTable from './components/StoreSliderTable/FurnitureStoreTable';


function App() {
  return (
    <div className="App">
      <Menu />
      <SearchBar />
      <Services />
      <FurnitureStoreSofa />
      <FurnitureStoreWardrobe />
      <FurnitureStoreChairs />
      <FurnitureStoreTable />
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

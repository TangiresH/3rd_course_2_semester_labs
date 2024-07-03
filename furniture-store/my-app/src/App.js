import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import SearchBar from './components/Search/Search';
import FurnitureStoreSofa from './components/StoreSliderSofa/FurnitureStoreSofa';
import FurnitureStoreWardrobe from './components/StoreSliderWardrobe/FurnitureStoreWardrobe';
import FurnitureStoreChairs from './components/StoreSliderChairs/FurnitureStoreChairs';
import FurnitureStoreTable from './components/StoreSliderTable/FurnitureStoreTable';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import Footer from './components/FooterNavigation/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <CartProvider>
        <Cart />
        <SearchBar />
        <Services />
        <FurnitureStoreSofa />
        <FurnitureStoreWardrobe />
        <FurnitureStoreChairs />
        <FurnitureStoreTable />
      </CartProvider>
      <section id="about" className="page-section">
        <h2>Акції</h2>
        <p>Інформація про акції.</p>
      </section>
      <Footer />
    </div>
  );
}

export default App;

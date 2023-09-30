import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CatalogPage } from './pages/CatalogPage';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { CartPage } from './pages/CartPage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import { useReducer } from 'react';
import reducer from './reducer';
import { StateContext } from './context/StateContext';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: JSON.parse(localStorage.getItem('products') || '').length
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Header />

      <main className="container">
        <div className="row">
          <div className="col">

            <Banner />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/catalog/:id" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </div>
        </div>
      </main>

      <Footer />
    </StateContext.Provider>
  );
}

export default App;

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
    count: localStorage.getItem('products') && JSON.parse(localStorage.getItem('products') || '').length,
    products: localStorage.getItem('products') && JSON.parse(localStorage.getItem('products') || '')
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header />

        <main className="main container">
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
      </div>
    </StateContext.Provider>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CatalogPage } from './pages/CatalogPage';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';

function App() {
  return (
    <>
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
              <Route path="/cart" element={<Cart />} />
              <Route path="/catalog/:id" element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

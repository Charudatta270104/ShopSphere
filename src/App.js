import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/style.css';
import Mynav from './components/Mynav';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
function App() {
  return (
    <>
    <Router>
    <Provider store={store}>
      <Mynav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="" element={<Products />}/>
      </Routes>
      <Footer/>
    </Provider>
  </Router>
    </>
  );
}

export default App;

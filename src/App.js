import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './assets/components/About';
import Banner from './assets/components/Banner';
import Footer from './assets/components/Footer';
import Products from './assets/components/Products';
import Socialmedia from './assets/components/Socialmedia';
import ProductDetails from './assets/components/Productdetail';
import './App.css';
import Header from './assets/components/Header';
import SubmitForm from './assets/components/Form'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Banner /><Products /><About /><Socialmedia /><Footer /></>} />
        <Route path="/product/:id" element={<><Header /><ProductDetails /><SubmitForm /><Socialmedia /><Footer /> </>} />
      </Routes>
    </Router>
  );
}

export default App;
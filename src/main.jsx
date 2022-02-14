import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Themes from './pages/themes'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import FAQs from './pages/FAQs/index'
import ProductDetails from './pages/Product Details/index'
import products from './data/products.json'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Themes products={products} />} />
        <Route path="/faqs" element={<FAQs />}/>
        <Route path="/product-details/:id" element={<ProductDetails products={products} />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

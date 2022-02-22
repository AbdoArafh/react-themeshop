import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Themes from './pages/themes'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import FAQs from './pages/FAQs/index'
import ProductDetails from './pages/Product_Details/index'
import { ProductsArray as products } from './utils/readyProducts'
import ShoppingCart from './pages/Shopping_Cart'
import AccountDashboard from './pages/Account_Dashboard/index'
import AllProducts from './pages/Products/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Themes products={products} />} />
        <Route path="/faqs" element={<FAQs />}/>
        <Route path="/product-details/:id" element={<ProductDetails products={products} />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/account-dashboard" element={<AccountDashboard />} />
        {/* Fun fact: It's actually recommended starting from v6 of react router */}
        {/* to add optional parameters */}
        <Route path="/all-products/:tags" element={<AllProducts products={products} />} />
        <Route path="/all-products" element={<AllProducts products={products} />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from "react";
import ReactDOM from "react-dom";

// styles
import "./index.css";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// utils
import { ProductsArray as products } from "./utils/readyProducts";

// pages
import ProductDetails from "./pages/Product_Details";
import Themes from "./pages/themes";
import FAQs from "./pages/FAQs";
import ShoppingCart from "./pages/Shopping_Cart";
import AccountDashboard from "./pages/Account_Dashboard";
import AllProducts from "./pages/Products";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Themes products={products} />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/product-details/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/account-dashboard" element={<AccountDashboard />} />
        {/* Fun fact: It's actually recommended starting from v6 of react router */}
        {/* to add optional parameters */}
        <Route
          path="/all-products/:tags"
          element={<AllProducts products={products} />}
        />
        <Route
          path="/all-products"
          element={<AllProducts products={products} />}
        />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

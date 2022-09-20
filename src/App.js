import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import ErrorPage from "./containers/ErrorPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />}></Route>
        <Route path="products/:productId" element={<ProductDetails />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

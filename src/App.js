<<<<<<< Updated upstream
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Header from "./components/Header";
import ProductList from "./components/ProductList"; // Make sure to import ProductList
>>>>>>> Stashed changes

function App() {
  return (
    <Provider store={store}>
<<<<<<< Updated upstream
      <div>
        <Header />
        <ProductList />
        <Checkout />
      </div>
=======
      <Router>
        <Header />
        <Routes> {/* Wrap your Route in a Routes component */}
          <Route path="/products" element={<ProductList />} /> {/* Use element prop */}
          {/* Define other routes as needed */}
        </Routes>
      </Router>
>>>>>>> Stashed changes
    </Provider>
  );
}

export default App;

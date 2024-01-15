import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Header from "./components/Header";
import ProductList from "./components/ProductList"; // Make sure to import ProductList

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

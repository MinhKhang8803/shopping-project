// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ProductList />
        <Checkout />
      </div>
    </Provider>
  );
}

export default App;

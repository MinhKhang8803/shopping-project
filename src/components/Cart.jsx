import React, { useState } from 'react';
import * as s from '../styled-component/Cart-styled';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      image: 'product1.jpg',
      price: 20,
      quantity: 1,
    },
    {
        
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: 'product1.jpg',
        price: 20,
        quantity: 1,
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: 'product1.jpg',
        price: 20,
        quantity: 1,
      },
    // Add more products as needed
  ]);

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setDeleteConfirmation(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId ? { ...product, quantity: newQuantity } : product
        )
      );
    }
  };

  const handleDelete = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    setDeleteConfirmation(null);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Checkout logic goes here!');
  };

  return (
    <s.Container>
        
      {cart.length === 0 ? (
        <p>You have no products in the cart.</p>
      ) : (
        <>
          {cart.map((product) => (
            <s.ProductContainer key={product.id}>
              <s.ProductInfo>
                <s.ProductImage src={product.image} alt={product.name} />
                <s.ProductDetails>
                  <s.ProductName>{product.name}</s.ProductName>
                  <s.ProductDescription>{product.description}</s.ProductDescription>
                </s.ProductDetails>
              </s.ProductInfo>
              <s.QuantityContainer>
                <s.QuantityButton
                  onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                >
                  <FiMinus />
                </s.QuantityButton>
                <span>{product.quantity}</span>
                <s.QuantityButton
                  onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                >
                  <FiPlus />
                </s.QuantityButton>
                <s.DeleteButton onClick={() => handleQuantityChange(product.id, 0)}>
                  <FiTrash2 />
                </s.DeleteButton>
              </s.QuantityContainer>
            </s.ProductContainer>
          ))}
          <s.TotalContainer>
            <s.TotalText>Total:</s.TotalText>
            <span>${getTotalPrice()}</span>
          </s.TotalContainer>
          <s.CheckoutButton onClick={handleCheckout}>Checkout</s.CheckoutButton>
          {deleteConfirmation !== null && (
            <s.ConfirmationPopup>
              <p>Do you want to delete this item?</p>
              <button onClick={() => handleDelete(deleteConfirmation)}>Yes</button>
              <button onClick={() => setDeleteConfirmation(null)}>No</button>
            </s.ConfirmationPopup>
          )}
        </>
      )}
    </s.Container>
  );
};

export default Cart;

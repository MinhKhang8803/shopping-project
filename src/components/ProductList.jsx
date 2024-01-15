import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsRequest } from '../actions/productActions';
import { addToCart } from '../actions/cartActions'; // Make sure to import the addToCart action

const ProductList = ({ dispatch, loading, products, error }) => {
    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.product.products,
    loading: state.product.loading,
    error: state.product.error,
});

export default connect(mapStateToProps)(ProductList);
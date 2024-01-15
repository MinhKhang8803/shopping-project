import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductDetails = ({ product, addToCart }) => {
    if (!product) {
        return <div>Loading...</div>; // You might want to handle the case when the product is still loading
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={handleAddToCart} className="btn btn-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id; // Assuming you're using React Router for navigation
    return {
        product: state.products.find(product => product.id === productId),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: product => dispatch(addToCart(product)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

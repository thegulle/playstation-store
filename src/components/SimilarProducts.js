import React, { Component } from 'react';

class SimilarProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    render({ products, addCartItem } = this.props) {
        return (
            <>
                <div className="grid grid-cols-3 gap-4 mb-20">
                    {
                        products.map((product, index) => (
                            <div className="product-card" key={index}>
                                <button onClick={() => addCartItem(product)} className="bg-white text-dark">
                                    Add to cart
                                    <i className="ph-game-controller"></i>
                                </button>
                                <img
                                    width={'140px'}
                                    src={product.image}
                                    alt="product"
                                />
                                <div className="product-info">
                                    <h1 className="text-white">
                                        {product.name}
                                    </h1>
                                    <h1>
                                        {product.price} $
                                    </h1>
                                </div>

                            </div>
                        ))}
                </div>
            </>
        );
    }
}

export default SimilarProducts;

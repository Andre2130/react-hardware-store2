import React, { Component } from 'react';
import Product from './Product'

class CartView extends Component {
    render() {
        return (
            <div>
                 <h1>Cart View</h1>
        <h2>Products</h2>
        <div>
          { this.props.cartList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
                <button onClick={() => this.props.removeProductFromShoppingCart(index)}>Remove</button>
              </div>

            )
          }) }
        </div>
            </div>
        );
    }
}

export default CartView;
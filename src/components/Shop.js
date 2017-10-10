import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
  constructor () {
    super()

    this.state = {
      isAdmin: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Issa hammer',
          price: 12.3
        },
        {
          productName: 'Nail',
          description: 'Issa nail',
          price: 0.12
        }
      ],
      cartList: []
    }
  }

  addProductToProductList = (newProduct) => {
    const newProductList = [...this.state.productList]
    newProductList.push(newProduct)
    this.setState({productList: newProductList})
  }

  deleteProductFromProductList = (id) => {
    const newProductList = [...this.state.productList]
    newProductList.splice(id, 1)
    this.setState({productList: newProductList})
  }

  toggleIsAdmin = () => {
    this.setState({isAdmin: !this.state.isAdmin})
  }
  
  addProductToShoppingCart = (id, cartList) => {
    const newProductList = [...this.state.productList]
    const newCartList = [...this.state.cartList]
    newCartList.push(newProductList[id])
    this.setState({cartList: newCartList})
  }
  removeProductFromShoppingCart = (id) => {
    const newCartList = [...this.state.cartList]
    newCartList.splice(id, 1)
    this.setState({cartList: newCartList})
  }

  render () {
    return (
      <div >
        <button onClick={this.toggleIsAdmin}>Toggle Admin</button>
        <div className="shop">
          <div className="products">
            {this.state.isAdmin
              ? <AdminView
                productList={this.state.productList}
                addProductToProductList={this.addProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList}
                addProductToShoppingCart={this.addProductToShoppingCart}
              /> : <ShopView
                productList={this.state.productList}
              />}
          </div>
          <div className="products">
          <CartView 
          cartList={this.state.cartList} 
          removeProductFromShoppingCart={this.removeProductFromShoppingCart}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Shop
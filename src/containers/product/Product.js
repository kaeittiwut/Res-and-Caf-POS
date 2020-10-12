import React, { Component } from 'react';
import Axios from 'axios';
import ProductList from '../../components/product/ProductList';
import { withRouter } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/products').then((res) => {
      this.setState({ products: res.data });
    });
  }

  delProduct(product) {
    Axios.delete('http://localhost:3001/products/' + product.id).then((res) => {
      Axios.get('http://localhost:3001/products').then((res) => {
        this.setState({ products: res.data });
      });
    });
  }

  editProduct(product) {
    this.props.history.push('products/edit/' + product.id);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1>สินค้า</h1>
            </div>
            <div className="col-6">
              <button
                className="btn btn-success title float-right"
                onClick={() => this.props.history.push('products/add')}
              >
                เพิ่ม
              </button>
            </div>
          </div>
          <ProductList
            products={this.state.products}
            onDelProduct={this.delProduct}
            onEditProduct={this.editProduct}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Product);

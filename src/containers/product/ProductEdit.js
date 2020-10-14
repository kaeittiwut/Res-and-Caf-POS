import React, { Component } from 'react';
import ProductForm from '../../components/product/ProductForm';
import { connect } from 'react-redux';
import { productCreate, productUpdate, productFetch } from '../../actions';

class ProductEdit extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.productFetch(this.props.match.params.id);
    }
  }

  render() {
    const {
      formValues,
      match,
      products,
      productCreate,
      productUpdate,
    } = this.props;
    return (
      <div className="container col-md-5">
        {match.path.indexOf('add') > 0 && (
          <div>
            <h2>เพิ่มสินค้า</h2>
            {products.saved && (
              <div className="alert alert-secondary title" role="alert">
                {products.msg}
              </div>
            )}
            <ProductForm onProductSubmit={() => productCreate(formValues)} />
          </div>
        )}
        {match.path.indexOf('edit') > 0 && (
          <div>
            <h2>แก้ไขสินค้า</h2>
            {products.saved && (
              <div className="alert alert-secondary title" role="alert">
                {products.msg}
              </div>
            )}
            <ProductForm
              onProductSubmit={() => productUpdate(products.id, formValues)}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ form, products }) {
  return {
    formValues: form.productForm ? form.productForm.values : null,
    products,
  };
}

export default connect(mapStateToProps, {
  productFetch,
  productUpdate,
  productCreate,
})(ProductEdit);

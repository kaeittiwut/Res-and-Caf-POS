import React, { Component } from 'react';
import Monitor from '../components/monitor/Monitor';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div className="Home">
        <Monitor products={this.props.products} />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home);

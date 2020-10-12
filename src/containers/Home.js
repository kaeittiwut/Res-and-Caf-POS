import React, { Component } from 'react';
import Monitor from '../components/monitor/Monitor';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
  }

  componentDidMount() {
    // fetch('http://localhost:3001/products', { method: 'GET' })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({ products: res });
    //   });
    Axios.get('http://localhost:3001/products').then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="Home">
        <Monitor products={this.state.products} />
      </div>
    );
  }
}

export default Home;

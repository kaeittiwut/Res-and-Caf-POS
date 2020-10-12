import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <Header />
        <Monitor products={this.state.products} />
        <Footer company="Developed with Mind" email="contact@devwithmind.com" />
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h3 className="text-success">
              <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" />
              Res &amp; Caf
            </h3>
          </div>
          <div className="col-md-4 text-right">
            <h6 className="text-muted mt-4">
              {this.state.date.toLocaleDateString() +
                ' ' +
                this.state.date.toLocaleTimeString()}
            </h6>
            <ul className="list-inline">
              <li className="list-inline-item title">
                <Link className="text-success" to="/">
                  หน้าหลัก
                </Link>
              </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title">
                <Link className="text-success" to="/orders">
                  รายการสั่งซื้อ
                </Link>
              </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title">
                <Link className="text-success" to="/products">
                  สินค้า
                </Link>
              </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title">
                <Link className="text-success" to="/about">
                  เกี่ยวกับเรา
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;

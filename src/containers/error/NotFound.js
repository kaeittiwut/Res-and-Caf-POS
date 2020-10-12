import React, { Component } from 'react';

class NotFound extends Component {
  NotFound() {
    return (
      <div>
        <div className="container col-md-8 text-center">
          <h1 className="mt-5" style={{ fontSize: 120 }}>
            404
          </h1>
          <h2 className="mt-4">Not Found</h2>
          <h4 className="title text-center mt-4">
            โอ๊ะ! ไม่พบหน้าที่คุณต้องการ
          </h4>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.NotFound()}</div>;
  }
}

export default NotFound;

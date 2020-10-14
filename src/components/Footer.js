import React from 'react';

const Footer = (props) => {
  const { company, email } = props;

  return (
    <div className="container-fluid">
      <hr />
      <div className="col text-center title text-uppercase">
        <small>
          <span className="text-danger"> {company} </span>|
          <span className="text-muted"> {email}</span>
        </small>
      </div>
      <br />
    </div>
  );
};

export default Footer;

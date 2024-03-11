import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#333',
    color: 'white',
    padding: '1em 0',
    textAlign: 'center',
  };

  const pStyle = {
    margin: 0,
  };

  const divStyle = {
    margin: '0.5em 0',
  };

  const aStyle = {
    color: 'white',
    padding: '0 1em',
  };

  return (
    <footer style={footerStyle}>
      <p style={pStyle}>© 2023 myCompany, All Rights Reserved.</p>
      <div style={divStyle}>
        <a href="#twitter" style={aStyle}>Twitter</a>
        <a href="#instagram" style={aStyle}>Instagram</a>
        <a href="#facebook" style={aStyle}>Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

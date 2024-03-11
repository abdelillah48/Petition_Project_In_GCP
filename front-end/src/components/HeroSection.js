import React from 'react';

const HeroSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding: '4em 1em',
    background: '#f0f0f0'
  };

  const h1Style = {
    margin: '0.5em 0',
    fontSize: '2em'
  };

  const pStyle = {
    margin: '0.5em 0',
    color: '#666'
  };

  const buttonStyle = {
    padding: '0.5em 1em',
    background: 'blue',
    color: 'white',
    border: 'none'
  };

  return (
    <section id="home" style={sectionStyle}>
      <h1 style={h1Style}>Build Powerful Petitions</h1>
      <p style={pStyle}>Empowering individuals to make a difference</p>
      <button style={buttonStyle}>Get Started</button>
    </section>
  );
};

export default HeroSection;

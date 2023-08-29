import React from 'react';

function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/green-yellow-red-purple-violet-sedan-sport-cars-standing-dark-space.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
    padding: '40px',
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const paragraphStyle = {
    fontSize: '24px',
    textAlign: 'center',
    maxWidth: '600px',
    lineHeight: '1.5',
  };

  return (
    <>
      <header style={backgroundStyle}>
        <h1 style={titleStyle}>Discover Your Dream Car</h1>
        <p style={paragraphStyle}>Find the perfect ride that suits your style and needs.</p>
      </header>
    </>
  );
}

export default Header;

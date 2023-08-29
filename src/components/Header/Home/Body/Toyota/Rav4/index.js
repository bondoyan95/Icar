import React, { useState } from 'react';

const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';
const carImageUrl =
'https://www.motortrend.com/uploads/sites/10/2022/05/2022-toyota-rav4-prime-xse-plug-in-hybrid-4wd-suv-angular-front.png';

const ToyotaRav4 = () => {
  const colors = [
    { name: 'Silver', code: '#c0c0c0' },
    { name: 'Black', code: '#000' },
    { name: 'White', code: '#fff' },
    { name: 'Blue', code: '#007bff' },
  ];
  const configurations = [
    { name: 'LE', price: '$20,000' },
    { name: 'XLE', price: '$22,500' },
    { name: 'SE', price: '$23,500' },
    { name: 'XSE', price: '$25,000' },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].code);

  const handleColorButtonClick = (colorCode) => {
    setSelectedColor(colorCode);
  };

  const styles = {
    toyotaCorolla: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px',
      borderRadius: '20px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${backgroundUrl}) no-repeat center center fixed`,
      backgroundSize: 'cover',
      color: '#fff',
    },
    contentWrapper: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      margin: '0 0 30px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    content: {
      fontSize: '20px',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    carImageWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    carImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    colorButtonWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    },
    colorButton: {
      padding: '12px 24px',
      margin: '10px',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      color: '#fff',
      background: 'linear-gradient(to bottom right, #222, #333)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      transition: 'background 0.3s, transform 0.2s, box-shadow 0.3s',
    },
    colorButtonSilver: {
      background: 'linear-gradient(to bottom right, #c0c0c0, #999)',
    },
    colorButtonBlack: {
      background: 'linear-gradient(to bottom right, #000, #333)',
    },
    colorButtonWhite: {
      background: 'linear-gradient(to bottom right, #fff, #ddd)',
      color: '#333', // Change text color for better contrast
    },
    colorButtonBlue: {
      background: 'linear-gradient(to bottom right, #007bff, #0056b3)',
    },
    configButton: {
      padding: '12px 24px',
      margin: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      color: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      background: 'red',
    },
    buyButton: {
      padding: '12px 24px',
      margin: '10px',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s, background-color 0.3s, box-shadow 0.3s',
      border: 'none',
      outline: 'none',
      color: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      background: '#0056b3',
    },
  };

  return (
    <div style={styles.toyotaCorolla}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>Toyota Corolla: Reliable and Popular Car</h2>
        <div style={styles.content}>
          <p>
            Toyota Corolla is one of the most popular and long-lasting cars in the world. This compact sedan or hatchback (or crossover in some versions) is known for its reliability, fuel efficiency, and comfort.
          </p>

          <div style={styles.buttonGroup}>
            {configurations.map((config, index) => (
              <button key={index} style={{ ...styles.button, ...styles.configButton }}>
                {config.name}: {config.price}
              </button>
            ))}
          </div>

          <button style={{ ...styles.button, ...styles.buyButton }}>Buy Now</button>
        </div>
      </div>
      <div style={styles.carImageWrapper}>
        <img src={carImageUrl} alt="Toyota Corolla" style={styles.carImage} />
        <div style={styles.colorButtonWrapper}>
          <button
            style={{ ...styles.colorButton, ...styles.colorButtonSilver }}
            onClick={() => handleColorButtonClick('#c0c0c0')}
          >
            Silver
          </button>
          <button
            style={{ ...styles.colorButton, ...styles.colorButtonBlack }}
            onClick={() => handleColorButtonClick('#000')}
          >
            Black
          </button>
          <button
            style={{ ...styles.colorButton, ...styles.colorButtonWhite }}
            onClick={() => handleColorButtonClick('#fff')}
          >
            White
          </button>
          <button
            style={{ ...styles.colorButton, ...styles.colorButtonBlue }}
            onClick={() => handleColorButtonClick('#007bff')}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyotaRav4;

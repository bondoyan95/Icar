import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
   
    {
      name: 'Tesla Model S',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/2e3cf55b-c241-47c3-8b92-fd8695412d64/b10dd4c6-8a81-4b1a-9bec-c43f08d5c13c.png',
  },
  {
      name: 'Tesla Model 3',
      image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_360,q_auto:best,w_640/v1/cms/uploads/eivukqhqsvhxcwvda9af',
  },
  {
      name: 'Tesla Model X',
      image: 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=FRONT34&size=1400&model=mx&options=$MDLX,$MTX13,$PPSW,$WX00,$APBS,$CC02,$SC04,$DRLH,$CPF0,$IBE00,$ST03&crop=1400,850,300,130&',
  },
  {
      name: 'Tesla Model Y',
      image: 'https://unifleet.se/wp-content/uploads/2022/03/Model-y-performance-parlvit-multi-coat-1.png',
  },
 
  {
      name: 'Tesla Roadster',
      image: 'https://www.motortrend.com/uploads/izmo/tesla/roadster/2022/roadster.png?fit=around%7C875:492.1875',
  },
  {
      name: 'Tesla Semi',
      image: 'https://cdn.motor1.com/images/mgl/eooxnP/s1/tesla-semi-updated-photos.jpg',
  },



  
  ];

  const styles = {
    container: {
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    signContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    signItem: {
      margin: '20px',
      width: '300px',
      textAlign: 'center',
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      border: '2px solid #ccc'
    },
    signImage: {
      maxWidth: '100%',
      maxHeight: '130px',
      overflow: 'hidden',
      borderRadius: '5px',
    },
    signName: {
      marginTop: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

  const getRows = (data, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      const row = data.slice(i, i + itemsPerRow);
      rows.push(row);
    }
    return rows;
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Tesla Car Showroom!</h1>
      <div style={styles.signContainer}>
        {getRows(roadSigns, 3).map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map((sign, index) => (
              <div key={index} style={styles.signItem}>
                <div style={styles.signImage}>
                  <a href={sign.link} rel="noopener noreferrer">
                    <img src={sign.image} alt={sign.name} style={styles.signImage} />
                  </a>
                </div>
                <div style={styles.signName}>{sign.name}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomComponent;
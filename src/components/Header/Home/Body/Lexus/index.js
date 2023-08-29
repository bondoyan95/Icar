import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
   
    {
      name: 'Lexus ES',
      image: 'https://www.motortrend.com/uploads/sites/10/2016/09/2017-lexus-es-350-sedan-angular-front.png',
  },
  {
      name: 'Lexus LS',
      image: 'https://www.motortrend.com/uploads/sites/10/2023/03/2022-lexus-ls-500h-sedan-angular-front.png?fit=around%7C875:492.1875',
  },
  {
      name: 'Lexus GX',
      image: 'https://kong-proxy-aws.toyota-europe.com/l1-images/resize/ccis/680x680/zip/kz/product-token/bc6b0826-bcec-4185-ba2a-19cf1ee3e8c3/vehicle/d62a240d-0b79-42ce-8bea-bd1b299170d8/padding/50,50,50,50/image-quality/70/day-exterior-04_1h9.png',
  },
  {
      name: 'Lexus LX',
      image: 'https://www.motortrend.com/uploads/2021/10/2022-Lexus-LX.png',
  },
  {
      name: 'Lexus RX',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/0de7a538-4587-4e27-856b-bd234038b256/a1c31b3f-fa6d-46a6-8601-2fc4652adf52.png',
  },
  {
      name: 'Lexus NX',
      image: 'https://s3.amazonaws.com/lexus.site.lexus/tci-prod/lexus/media/build/nx/col/big/b24_hgcezt_pl_0083_h.png?ck=07122023050627',
  },
  {
      name: 'Lexus UX',
      image: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/f38155fe-6d39-4046-a970-288ac7d33d01/cc4d9a65-da2f-4754-8e0c-91e2dbb46597.png',
  },
  {
      name: 'Lexus RC',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/4c876a5d-5fdb-449e-8745-755038b9c10e/01336993-99e7-41d3-88b4-6bf9ae84ef6a.png',
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
      <h1>Welcome to the Lexus Car Showroom!</h1>
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
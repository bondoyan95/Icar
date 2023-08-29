import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
   
    {
      name: 'Mercedes-Benz C-Class',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mercedes-benz-c-class-my22-index-1.png',
  },
  {
      name: 'Mercedes-Benz E-Class',
      image: 'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/e-class/e-class-saloon-w213-fl-pi/modeloverview/12-2022/images/mercedes-benz-e-class-saloon-w213-696x392-12-2022.png',
  },
  {
      name: 'Mercedes-Benz S-Class',
      image: 'https://www.mercedes-benz.com.cy/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/_jcr_content/image.MQ6.2.2x.20220218091835.png',
  },
  {
      name: 'Mercedes-Benz GLC',
      image: 'https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/models/glc/suv-x253/_jcr_content/image.MQ6.2.2x.20220708133835.png',
  },
  {
      name: 'Mercedes-Benz GLE',
      image: 'https://production.autoforce.com/uploads/version/profile_image/9518/comprar-mercedes-amg-gle-63-s-4matic_e98f557bbc.png',
  },
  {
      name: 'Mercedes-Benz GLB',
      image: 'https://www.mercedes-benz.com.cy/passengercars/mercedes-benz-cars/models/glb/glb-suv/_jcr_content/image.MQ6.2.2x.20211207085530.png',
  },
  {
      name: 'Mercedes-Benz GLA',
      image: 'https://www.mercedes-benz.bg/passengercars/mercedes-benz-cars/models/gla/gla-h247/_jcr_content/image.MQ6.2.2x.20210108125629.png',
  },
  {
      name: 'Mercedes-Benz A-Class',
      image: 'https://www.motortrend.com/uploads/sites/10/2019/04/2019-mercedes-benz-a-class-220-sedan-angular-front.png',
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
      <h1>Welcome to the Mercedes-Benz Car Showroom!</h1>
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
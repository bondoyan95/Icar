import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Toyota Corolla',
      
      image: 'https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/cor/col/big/b23_bprbe_fl1_0040_a.png?ck=07182023044248',
      link: '/Corolla', 
    },
    {
      name: 'Toyota Camry',
      
      image: 'https://agungtoyotabatam.com/wp-content/uploads/2023/04/04_graphite-metallic.png',
      link: '/Camry', 
    },
    {
      name: 'Toyota Prius',
      
      image: 'https://www.motortrend.com/uploads/sites/10/2015/11/2015-toyota-prius-hybrid-three-hatchback-angular-front.png?fit=around%7C875:492.1875',
      link: '/Prius', 
    },
    {
      name: 'Toyota RAV4',
      
      image: 'https://www.motortrend.com/uploads/sites/10/2022/05/2022-toyota-rav4-prime-xse-plug-in-hybrid-4wd-suv-angular-front.png',
      link: '/Rav4', 
    },
    {
      name: 'Toyota Highlander',
      
      image: 'https://www.buyatoyota.com/assets/img/vehicle-info/Highlander/2023/hero_image_highlander.png',
      link: '/Highlander', 
    },
    
    {
      name: 'Toyota Sequoia',
      
      image: 'https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/seh/col/big/b23_byysg_fl1_01g3_b.png?ck=07182023044245',
      link: '/', 
    },
    {
      name: 'Toyota Tundra',
      
      image: 'https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/tp2/col/big/b23_la5aa_fl1_01g3_a.png?ck=07072023015424',
      link: '/', 
    },
    {
      name: 'Toyota Tacoma',
      
      image: 'https://www.buyatoyota.com/assets/img/vehicle-info/Tacoma/2023/hero_image_tacoma.png',
      link: '/', 
    },
    {
      name: 'Toyota Sienna',
      
      image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65a4859031e3d8e88cb10/stills_0640_png/MY2022/50988/50988_st0640_116.png',
      link: '/', 
    },
    {
      name: 'Toyota Venza',
      
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/a9d82472-18d8-47bf-8efd-1074891f641d/a2ad0690-2a06-447d-b875-93934b14787b.png',
      link: '/', 
    },
    {
      name: 'Toyota Supra',
      
      image: 'https://www.toyota.com.jo/sites/default/files/styles/facebook_metatag/public/2022-08/20_GRSupra_3.0_AbsoluteZero_3_2.png?h=bea9f35f&itok=mH0PVa2x',
      link: '/', 
    },
    {
      name: 'Toyota Land Cruiser',
      
      image: 'https://www.motortrend.com/uploads/sites/10/2017/05/2017-toyota-landcruiser-base-suv-angular-front.png',
      link: '/', 
    },
    {
      name: 'Toyota GR86',
      
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Toyota-GR86.png',
      link: '/', 
    }



  
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
      <h1>Welcome to the Toyota Car Showroom!</h1>
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
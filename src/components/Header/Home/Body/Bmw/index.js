import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'BMW 1 Series',

      
      image: 'https://www.bmw.com/content/dam/bmw/common/all-models/1-series/5-door/2021/navigation/bmw-1-series-modelfinder.png', // Add the URL to the image of BMW 1 Series 2021
    },
    {
      name: 'BMW 2 Series',
      
      image: 'https://www.bmw.ru/content/dam/bmw/common/all-models/2-series/gran-coupe/2022/navigation/BMW-2-Series-gran-coupe_ModelCard.png', // Add the URL to the image of BMW 2 Series 2021
    },
    {
      name: 'BMW 3 Series',
      
      image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JZg10tLhu1XzWVo7puMLWFmdkAj5DOPiQO%25Z8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giAqNF1VgxNJ0%25lI2oub5imC2yRCzXeTt%25ViPRKVZVYVs7Wh1DMztIVGeqVYDafaiojmztYRSJdw67aftxdTlkw1RSfWQluq%25VxdSeZs3EuzWQdjc0kN3aeZQ6KAnVXRjcZwBLv5rx6Kc%252y5b4WwBKupC3PFe%252B3iEucIjup2XH5Lzv63iprJ849GwXHi4TPHB9%25rJHFlMJOou4TJIsDRXL3FlTv0YiyyXIslGAtebCrv0s9OfjNE4GA0ogS7wNF9OALUdMRkIogOybQk0nvLUgChZSR5GybUEqgbF89ChbNmUh%25PoEqhk7b1DMLNmqn1hdnDyk7m5VqQkYCn178zmZptE5V1Pa7cVfN8zVMR1KJSkPazDxVyDdnMRaYWzCfQ5DxRte2OVZ8YWxfjpyKcPteWS6iHdKMfjedwHJ8BDS6jQ%25JTb2Ydw6ZuTlJptQ%25wc3lsBifZu%25KXs0THSc3uBr0ClJdKX324AEMTQBrXpFOvolZ24riIg5kscpF4HvUmt0KiIFJGb7OABHvIT9hu4O2JGvloq3qgpT9GsLljFUilo90ys6bbHsLoAC0vvhJ0yLOEAwqqTACygNOYHmlDCRwzky2o3eED89RGlLbuUrOQZpy', // Add the URL to the image of BMW 3 Series 2021
    },
    {
      name: 'BMW 4 Series',
      
      image: 'https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/bmw-cars/4-series/series-overview/4series-G22-M440i-xDrive-MSport-Coupe-Artic-Race-Blue-890x501.png', // Add the URL to the image of BMW 4 Series 2021
    },
    {
      name: 'BMW 5 Series',
     
      image: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=245A&client=byo&paint=P0C3Z&fabric=FKSSW&sa=S01CE,S02TE,S0302,S0316,S0319,S0322,S03G2,S0403,S043L,S0459,S04FL,S05AS,S05DM,S0674,S06AC,S06AK,S06C4,S06NX,S0775&quality=70&bkgnd=transparent&resp=png&angle=40&w=9800&h=8000&x=100&y=1100', // Add the URL to the image of BMW 5 Series 2021
    },
    {
      name: 'BMW 6 Series',
      
      image: 'https://www.bmw.com.mo/content/dam/bmw/common/all-models/6-series/gran-coupe/2014/model-card/BMW-6-Series-Gran-Coupe_ModelCard.png', // Add the URL to the image of BMW 6 Series 2021
    },
    {
      name: 'BMW 7 Series',
     
      image: 'https://www.bmw.co.za/content/dam/bmw/common/all-models/i-series/i7/2022/Navigation/bmw-7-series-i7-modellfinder.png', // Add the URL to the image of BMW 7 Series 2021
    },
    {
      name: 'BMW 8 Series',
     
      image: 'https://www.bmw.uz/content/dam/bmw/common/all-models/8-series/coupe/2022/navigation/bmw-8series-coupe-modellfinder.png.asset.1643150005822.png', // Add the URL to the image of BMW 8 Series 2021
    },
    {
      name: 'BMW X1',
      
      image: 'https://cdn.kodixauto.ru/media/image/5e098c82019a250001a80bcb', // Add the URL to the image of BMW X1 2021
    },
    {
      name: 'BMW X2',
      
      image: 'https://assets-clean.local-car-finder.com/images/15068/15068_st1280_089.png', // Add the URL to the image of BMW X2 2021
    },
    {
      name: 'BMW X3',
      
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/bmw-x3-my19-prev.png', // Add the URL to the image of BMW X3 2021
    },
    {
      name: 'BMW X4',
      
      image: 'https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/X4/M40i/22XV_C4P.png', // Add the URL to the image of BMW X4 2021
    },
    {
      name: 'BMW X5',
      
      image: 'https://larte-design.ru/images/bmw/x5m%20f95/BMW_X5M_Competition_front_PNG%20(1).png', // Add the URL to the image of BMW X5 2021
    },
    {
      name: 'BMW X6',
     
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/bmw-x6-my21-index-1.png', // Add the URL to the image of BMW X6 2021
    },
    {
      name: 'BMW X7',
      
      image: 'https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_auto/v1/svp/dep/22bmwx7xdrive40isu1fa/bmw_22x7xdrive40isu1fa_angularfront_alpinewhite', // Add the URL to the image of BMW X7 2021
    },
    {
      name: 'BMW i3',
      
      image: 'https://media.adtorqueedge.com/new-cars/bmw-aus/i3/variant/i3.png', // Add the URL to the image of BMW i3 2021
    },
    {
      name: 'BMW i8',
      
      image: 'https://www.pngkit.com/png/full/157-1579694_new-2019-bmw-i8-roadster-bmw-i8.png', // Add the URL to the image of BMW i8 2021
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
      <h1>Welcome to the BMW Car Showroom!</h1>
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
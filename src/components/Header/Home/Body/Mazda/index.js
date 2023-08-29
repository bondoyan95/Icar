import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Mazda3',
      image: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/6bbf27b818839e920bfb41f68b64fefb.png',
    },
    {
      name: 'Mazda6',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mazda-6-my19-index-1.png',
    },
    {
      name: 'Mazda CX-3',
      image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_360,q_auto:best,w_640/v1/vehicles/showrooms/models/mazda-cx-3',
    },
    {
      name: 'Mazda CX-5',
      image: 'https://www.mazda.com.au/498bbb/globalassets/settings/vehicle-assets/cx-5/2023-04-bt2/qc/gt-sp/maz15211_cx-5_awd_g25_gt_sp_jet_black_mica_cx5maw5gtspn4_front_3-4_980x520px.png',
    },
    {
      name: 'Mazda CX-9',
      image: 'https://www.mazda.com.au/4af52c/globalassets/settings/vehicle-assets/cx-9/2020-12-ipm4-and-2021-10-21cy/quickcuts/3.-gt/cx-9_td2taac_42m_tc7_ext_360_24_separated_car_0003.png',
    },
    {
      name: 'Mazda MX-5 Miata',
      image: 'https://www.mazdausa.com/siteassets/vehicles/2023/mx-5-st/trims/sport/2022-mx5-sport-jet-black.png',
    },
    {
      name: 'Mazda MX-30',
      image: 'https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/16173-2023-mazda-mx-30',
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
      <h1>Welcome to the Mazda Car Showroom!</h1>
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
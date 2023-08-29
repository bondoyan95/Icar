import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Volkswagen Golf',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/volkswagen-golf8-index-1.png',
    },
    {
      name: 'Volkswagen Polo',
      image: 'https://static.cars.volkswagen.ru/cos_images/volkswagen/polo/polo_sedan_2020/polo_sedan_2020-respect/liftback/0Q0Q/1.png',
    },
    {
      name: 'Volkswagen Passat',
      image: 'https://static.cars.volkswagen.ru/cos_images/volkswagen/polo/polo_sedan_2020/polo_sedan_2020-respect/liftback/0Q0Q/1.png',
    },
    {
      name: 'Volkswagen Jetta',
      image: 'https://www.vw-axsel.ru/site/assets/files/24385/9_8e8e.png',
    },
    {
      name: 'Volkswagen Tiguan',
      image: 'https://di-uploads-pod28.dealerinspire.com/findlayvolkswagenhenderson/uploads/2020/04/2020-VW-Tiguan-MLP-Hero.png',
    },
    {
      name: 'Volkswagen Touareg',
      image: 'https://static.cars.volkswagen.ru/cos_images/volkswagen/touareg/touareg_cr/touareg_cr_business_elegance/suv/3M3M/1.png',
    },
   
    {
      name: 'Volkswagen Arteon',
      image: 'https://images.jazelc.com/uploads/galpinvolkswagen/2023-Volkswagen-Arteon-new.png',
    },
    {
      name: 'Volkswagen ID.3',
      image: 'https://ncars.com.ua/image/cache/data/Modelniy%20ryad/Volkswagen/id3/Volkswagen%20ID.3%201.-1000x625.png',
    },
    {
      name: 'Volkswagen ID.4',
      image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f41570f1e3d8e88cb10/stills_0640_png/MY2021/15064/15064_st0640_116.png',
    },
    {
      name: 'Volkswagen Amarok',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/volkswagen-amarok-index.png',
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
      <h1>Welcome to the VolksWagen Car Showroom!</h1>
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
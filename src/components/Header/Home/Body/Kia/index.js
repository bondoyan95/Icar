import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Kia Optima',
      image: 'https://www.avtogermes.ru/images/marks/kia/optima/iv-restajling/colors/b4u/718837822bb4c845eb38bb825af6e7b8.png',
  },
  {
      name: 'Kia Forte',
      image: 'https://www.kia.com/us/content/dam/kia/us/en/vehicles/forte/2023/trims/gt-mt/exterior/565e6b/360/01.png/jcr:content/renditions/mobile.png',
  },
  {
      name: 'Kia Sorento',
      image: 'https://www.avtogermes.ru/images/marks/kia/sorento/iv/colors/abp/cc3d1f877e066c7e410570e83e0997ce.png',
  },
  {
      name: 'Kia Telluride',
      image: 'https://www.kia.com/us/content/dam/kia/us/en/vehicles/telluride/2024/trims/lx/exterior/6e6f71/360/01.png/jcr:content/renditions/mobile.png',
  },
  {
      name: 'Kia Sportage',
      image: 'https://kia.irbis-auto.ru/uploads/auto_catalog/master-data/overviews/GY/20222022/prestige/SWP/14.png',
  },
  {
      name: 'Kia Carnival',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/2023-kia-carnival-index-1200x800-%281%29.png',
  },
 
  {
      name: 'Kia Rio',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/e1604b15-7564-4a3a-a983-6f5b4aa29073/7173030b-5962-4303-9845-df5cca4987e2.png',
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
      <h1>Welcome to the Kia Car Showroom!</h1>
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
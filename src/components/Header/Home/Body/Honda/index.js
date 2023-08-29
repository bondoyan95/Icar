import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
   
    {
      name: 'Honda Accord',
      image: 'https://www.honda.ca/-/media/Brands/Honda/Models/ACCORD/2023/Overview/03_KeyFeatures/Honda_Accord_key-features_desktop_1036x520_v2.png?h=520&iar=0&w=1036&rev=496c6d6de1154ef4afd9e6dd5e15e7d9&hash=BD236571C5D71428CBCAD14EE7E23208',
  },
  {
      name: 'Honda Civic',
      image: 'https://www.honda.com.sg/images/cars/2021_All-New_Civic/Exterior/Exterior.png',
  },
  {
      name: 'Honda CR-V',
      image: 'https://hondahue.net/wp-content/uploads/2022/05/crv-trang-1.png',
  },
  {
      name: 'Honda Pilot',
      image: 'https://www.honda.ca/-/media/Brands/Honda/Models/PILOT/2023/Overview/03_KeyFeatures/Honda_Pilot_key-features_desktop_1036x520.png?h=520&iar=0&w=1036&rev=571a070d190849209c9ede27422eec61&hash=1822A3D488F46A49791329C6810462EE',
  },
  {
      name: 'Honda Odyssey',
      image: 'https://di-uploads-pod36.dealerinspire.com/hondaofslidell/uploads/2021/08/2022-Honda-Odyssey-White-Banner.png',
  },
  {
      name: 'Honda Passport',
      image: 'https://www.honda.ca/-/media/Brands/Honda/Models/PASSPORT/2023/Overview/03_Key-Features/Desktop/Honda_Passport_key-features_desktop_1036x520.png?h=520&iar=0&w=1036&rev=e4c3b75272844627bd16e4ab860ecfc6&hash=C5148EE5786312E3F8FA2B668BC82CBF',
  },
  {
      name: 'Honda Ridgeline',
      image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65b4351031e3d8e88cb10/stills_0640_png/MY2023/51208/51208_st0640_116.png',
  },
  {
      name: 'Honda HR-V',
      image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:good,w_1920/cms/uploads/tejp8anzwhnvl42t53gx',
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
      <h1>Welcome to the Honda Car Showroom!</h1>
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
import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Nissan Altima',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/29aa41a1-8e67-4a7d-8424-10ae2f521512/a123e269-96be-4f60-9b80-26ee9011b090.png',
  },
  {
      name: 'Nissan Maxima',
      image: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/68f87073-876e-474d-9cf2-f1ed32defcd0/08633bd9-cb79-40c0-9070-33ec53dee1ab.png',
  },
  {
      name: 'Nissan Sentra',
      image: 'https://www.motortrend.com/uploads/sites/10/2019/01/2019-nissan-sentra-s-cvt-sedan-angular-front.png',
  },
  {
      name: 'Nissan Rogue',
      image: 'https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&w=8667&h=8667&x=797&y=222&height=326&width=578&vehicle=8_T33&paint=KAD&fabric=G&brand=nisnna&sa=1_T,2_DN,4_N,5_L,6_D,7_W,11_U,12_U,13_A,16_M,17_D,18_C,SHADOW_ON,PI_ON,PE_ON,2023',
  },
  {
      name: 'Nissan Murano',
      image: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/6ae5d7a6-807a-434a-91ec-fb549e8f80e0/b48450b6-0f6d-4fe5-ab21-ccc13dc0ea51.png',
  },
  {
      name: 'Nissan Pathfinder',
      image: 'https://cfx-vrf-main-imgs.imgix.net/0/0/6/242dfdc511643295c671e66f682989227d49b600.png?auto=format&fit=clip&w=420',
  },
  {
      name: 'Nissan Armada',
      image: 'https://cfx-vrf-main-imgs.imgix.net/3/3/5/2037cb2d954b46d9423a7a0fc88713a18666d533.png?auto=format&fit=clip&w=420',
  },
  {
      name: 'Nissan Frontier',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/d16c59ab-90df-4c25-8fb5-1d2d8894dedc/af442c3a-32e8-4397-8e23-a111fa40aeb7.png',
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
      <h1>Welcome to the Nissan Car Showroom!</h1>
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
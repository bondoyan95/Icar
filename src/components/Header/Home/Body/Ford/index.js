import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Ford Mustang',
      image: 'https://minerva.leadboxhq.com/wp-content/uploads/2022/08/2022_ford_mustang_mach1Premium_FR_ShadowBlack-1-800x339.png',
  },
  {
      name: 'Ford F-150',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/e00ab909-c260-4aa6-ad90-ce53bfad8234/ce2f175f-9865-4054-995e-a3d6a8586b6f.png',
  },
  {
      name: 'Ford Explorer',
      image: 'https://www.motortrend.com/uploads/sites/10/2023/03/2023-ford-explorer-xlt-suv-angular-front.png',
  },
  {
      name: 'Ford Escape',
      image: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/bc0b94fb-531c-476d-9463-73cfda91c28c/c703dba7-40a7-4d4d-be94-8ebcc2850de7.png',
  },
  {
      name: 'Ford Edge',
      image: 'https://build.ford.com/dig/Ford/Edge/2023/HD-TILE/Image%5B%7CFord%7CEdge%7C2023%7C1%7C1.%7C400A.K4A..PM7..886.89E.~3DM00_BCMAG.61P.HFS.53G.85W.644.TDU.AWD.99P.ST.61B.76L.59P.91B.SSR.58B.SYC.44F.~VS-DK.LMI.STT.%5D/EXT/1/vehicle.png',
  },
  {
      name: 'Ford Ranger',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/ford-ranger-my23-index-1.png',
  },
  {
      name: 'Ford Bronco',
      image: 'https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/bronco/2023/collections/cyp/assetChoosePathLeft.png',
  },
  {
      name: 'Ford Expedition',
      image: 'https://build.ford.com/dig/Ford/Expedition/2024/HD-TILE/Image%5B%7CFord%7CExpedition%7C2024%7C1%7C1.%7C600A...PUM..88S.89H.77P.RBP.21D.BS2.43V.64P.4x2.998.96L.59N.%5D/EXT/1/vehicle.png',
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
      <h1>Welcome to the Ford Car Showroom!</h1>
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
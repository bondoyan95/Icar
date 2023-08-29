import React from 'react';


const CustomComponent= () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Audi A3',
      image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/audi-a3-my22-index-1.png',
  },
  {
      name: 'Audi A4',
      image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65b4757031e3d8e88cb10/stills_0640_png/MY2023/51668/51668_st0640_116.png',
  },
  {
      name: 'Audi A6',
      image: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/94800da8-9e78-42f5-bff2-d5d1c3f3c9d3/a986702f-2fd8-4c37-ad61-796049a81aa3.png',
  },
  {
      name: 'Audi A8',
      image: 'https://cdn.nwi-ms.com/media/ro/A/mc/4NC04A22/model/19front.png?F=5U5U&P=WN&M=0N5@2K9@2ZM@42H@4D3@6C4@6M1@6NQ@7HB@7X5@9AU@9PF@9VS@GS5@GZ2@N5DPS8@PXA@QL5@QQ2@UE8@VW8&flag=transparent',
  },
  {
      name: 'Audi Q3',
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/98188d4b-d4b9-4764-94a3-e7643170e066/94443caf-88e4-4e6a-8519-54d653e5ad79.png',
  },
  {
      name: 'Audi Q5',
      image: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f4350021e3d8e88cb10/stills_0640_png/MY2022/15219/15219_st0640_116.png',
  },
  {
      name: 'Audi Q7',
      image: 'https://cdn.nwi-ms.com/media/hu/A/mc/4MGCX20T/model/19front.png?F=2D2D&P=EI&M=1D3@1G1@1S1@2PF@2Z0@4A3@5KA@5XL@6E6@7K3@8X1@9R1@9S9@9VS@F62@GS5@N0Q@PV1@Q4Q@QL5@WQS&flag=transparent',
  },
  {
      name: 'Audi Q8',
      image: 'https://cdn.imagin.studio/getImage?customer=gbleasingoptionsltd&make=audi&modelFamily=q8&modelVariant=estate&trim=sport&width=750&v3=true&zoomLevel=30&zoomType=fullscreen&countryCode=GB&margins=0&angle=1&paintId=111413',
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
      <h1>Welcome to the Audi Car Showroom!</h1>
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
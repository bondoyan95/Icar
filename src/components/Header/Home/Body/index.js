import React from 'react';


const IBody = () => {
  const backgroundUrl = process.env.PUBLIC_URL + '/img/SL_092920_35860_03.jpg';

  const roadSigns = [
    {
      name: 'Toyota',
      image: 'https://ww1.freelogovectors.net/svg09/toyota-logo-freelogovectors.net_.svg',
      link: '/Toyota', 
    },
    {
      name: 'Honda ',
      image: 'https://ww1.freelogovectors.net/wp-content/uploads/2023/03/honda-logo-01-freelogovectors.net_.png',
      link: '/Honda', 
    },
    {
      name: 'BMW',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png',
      link: '/Bmw', 
    },
    {
      name: 'Ford',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png',
      link: '/Ford', 
    },
    {
      name: 'Mercedes-Benz',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/567px-Mercedes-Logo.svg.png?20230111203159',
      link: '/Mercedes',
    },
    {
      name: 'Audi',
      image: 'https://media.printables.com/media/prints/321186/images/2772740_6ba3a5b5-a72c-4528-b5e1-d60caab08965/thumbs/cover/1200x630/png/audi_logo-300x300.png',
      link: '/Audi',
    },
    {
      name: 'Tesla',
      image: 'https://download.logo.wine/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.png',
      link: '/Tesla',
    },
    {
      name: 'Nissan',
      image: 'https://www.foment.com/wp-content/uploads/2020/04/1200px-Nissan-logo.svg_.png',
      link: '/Nissan',
    },
    {
      name: 'Kia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KIA_logo2.svg/2560px-KIA_logo2.svg.png',
      link: '/Kia',
    },
    {
      name: 'Lexus',
      image: 'https://ww1.freelogovectors.net/wp-content/uploads/2023/04/lexus-logo-06-freelogovectors.net_.png',
      link: '/Lexus',
    },
    {
      name: 'Volkswagen',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/1200px-Volkswagen_Logo_till_1995.svg.png',
      link: '/VW', 
    },
    {
      name: 'Mazda',
      image: 'https://i.pinimg.com/originals/16/06/ac/1606acf59addffd333bf939746b8cc70.png',
      link: '/Mazda', 
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
    },
    signContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    signItem: {
      margin: '40px',
      width: '400px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
    },
    signImage: {
     
        maxWidth: '100%', 
        maxHeight: '130px', 
        overflow: 'hidden',
      
      overflow: 'hidden',
    },
    signName: {
      marginTop: '20px',
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
      <div style={styles.signContainer}>
        {getRows(roadSigns, 3).map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map((sign, index) => (
              <div key={index} style={styles.signItem}>
                <div style={styles.signImage}>
                  <a href={sign.link}  rel="noopener noreferrer">
                    <img src={sign.image} alt={sign.name} style={styles.signImage} />
                  </a>
                </div>
                <div style={styles.signName}>
                  {sign.name}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IBody;


import React, { useState } from "react";

const backgroundUrl = process.env.PUBLIC_URL + "/img/SL_092920_35860_03.jpg";

const colorImages = {
  Silver:
    "https://di-uploads-pod14.dealerinspire.com/oaklawntoyota/uploads/2020/08/2021-Toyota-Corolla-in-Classic-Silver-Metallic.png",
  Black:
    "https://di-uploads-pod14.dealerinspire.com/oaklawntoyota/uploads/2020/08/2021-Toyota-Corolla-in-Black-Sand-Pearl.png",
  White:
    "https://di-uploads-pod14.dealerinspire.com/oaklawntoyota/uploads/2020/08/2021-Toyota-Corolla-in-Super-White.png",
  Blue: "https://di-uploads-pod14.dealerinspire.com/oaklawntoyota/uploads/2020/08/2021-Toyota-Corolla-in-Blueprint.png",
};

const ToyotaCorolla = () => {
  const colors = [
    { code: "Silver" },
    { code: "Black" },
    { code: "White" },
    { code: "Blue" },
  ];

  const configurations = [
    { name: "LE", price: "$20,000" },
    { name: "XLE", price: "$22,500" },
    { name: "SE", price: "$23,500" },
    { name: "XSE", price: "$25,000" },
  ];

  const dealerships = [
    { name: "Toyota of Cityville", location: "Cityville" },
    { name: "Suburban Toyota", location: "Suburbia" },
    { name: "Downtown Toyota", location: "Downtown" },
    { name: "Rural Toyota", location: "Rural Town" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].code);
  const [selectedDealership, setSelectedDealership] = useState(dealerships[0]);
  const [selectedCarImage, setSelectedCarImage] = useState(
    colorImages[selectedColor]
  );

  const handleColorButtonClick = (colorCode) => {
    setSelectedColor(colorCode);
    setSelectedCarImage(colorImages[colorCode]);
  };

  const handleDealershipChange = (dealership) => {
    setSelectedDealership(dealership);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${backgroundUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    content: {
      maxWidth: "800px",
      padding: "40px",
      textAlign: "left",
    },
    title: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    description: {
      fontSize: "18px",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    buttonGroup: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 24px",
      margin: "10px",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      outline: "none",
      border: "none",
      transition: "transform 0.2s, background-color 0.3s, box-shadow 0.3s",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    },
    colorButton: {
      textIndent: "-9999px", // Скрываем текст за пределы видимой области
      overflow: "hidden", // Прячем все, что выходит за пределы кнопки
      whiteSpace: "nowrap", // Предотвращаем перенос текста на новую строку
      color: "#fff",
      backgroundColor: "transparent",
      border: "2px solid #fff",
      padding: "15px 30px",
      borderRadius: "50px", // Используем проценты или пиксели в зависимости от предпочтений
      minWidth: "120px", // Увеличим минимальную ширину для лучшего визуального эффекта
      fontSize: "16px", // Установим размер шрифта
      fontWeight: "bold", // Сделаем текст жирным
      cursor: "pointer", // Изменяем курсор при наведении
      transition: "background-color 0.3s, color 0.3s, border-color 0.3s", // Плавные переходы при изменении свойств
      outline: "none", // Убираем стандартный контур при фокусе
      "&:hover": {
        backgroundColor: "#fff",
        color: "#333",
        border: "2px solid #333",
      },
    },

    dealershipButton: {
      color: "#fff",
      backgroundColor: "green",
    },
    configButton: {
      color: "#fff",
      backgroundColor: "blue",
    },
    buyButton: {
      color: "#fff",
      backgroundColor: "red",
      width: 200,
      height: 70,
    },
    carImage: {
      width: "100%",
      maxWidth: "500px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Toyota Corolla: Reliable and Popular Car</h2>
        <p style={styles.description}>
          Toyota Corolla is one of the most popular and long-lasting cars in the
          world. This compact sedan or hatchback (or crossover in some versions)
          is known for its reliability, fuel efficiency, and comfort.
        </p>
        <div style={styles.buttonGroup}>
          {dealerships.map((dealer, index) => (
            <button
              key={index}
              style={{
                ...styles.button,
                ...styles.dealershipButton,
                ...(selectedDealership === dealer
                  ? { transform: "scale(1.1)" }
                  : {}),
              }}
              onClick={() => handleDealershipChange(dealer)}
            >
              {dealer.name}
            </button>
          ))}
        </div>
        <div style={styles.buttonGroup}>
          {configurations.map((config, index) => (
            <button
              key={index}
              style={{ ...styles.button, ...styles.configButton }}
            >
              {config.name}: {config.price}
            </button>
          ))}
        </div>
        <button style={{ ...styles.button, ...styles.buyButton }}>
          Buy Now
        </button>
      </div>
      <div>
        <img
          src={selectedCarImage}
          alt="Toyota Corolla"
          style={styles.carImage}
        />
        <div style={styles.buttonGroup}>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{
                ...styles.button,
                ...styles.colorButton,
                backgroundColor: color.code,
                ...(selectedColor === color.code
                  ? { transform: "scale(1.1)" }
                  : {}),
              }}
              onClick={() => handleColorButtonClick(color.code)}
            >
              {color.code}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyotaCorolla;

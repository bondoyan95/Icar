import React, { useState } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Здесь может быть логика отправки запроса на сервер или обработка локальных данных
    // и обновление состояния results с полученными результатами

    // Пример обработки локальных данных (замените этот код на свою реализацию):
    const filteredResults = someData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  const searchContainerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
  };

  const inputContainerStyle = {
    display: 'flex',
  };

  const searchInputStyle = {
    flex: '1',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
  };

  const searchButtonStyle = {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  };

  const resultsContainerStyle = {
    marginTop: '20px',
  };

  const resultItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  };

  const resultItemHeadingStyle = {
    marginTop: '0',
  };

  return (
    <div style={searchContainerStyle}>
      <form onSubmit={handleSearch}>
        <div style={inputContainerStyle}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Введите запрос..."
            style={searchInputStyle}
          />
          <button type="submit" style={searchButtonStyle}>
            Найти
          </button>
        </div>
      </form>

      <div style={resultsContainerStyle}>
        {results.map((item) => (
          <div key={item.id} style={resultItemStyle}>
            <h3 style={resultItemHeadingStyle}>{item.name}</h3>
            <p>{item.description}</p>
            {/* Здесь можно отобразить другую информацию о найденных элементах */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;

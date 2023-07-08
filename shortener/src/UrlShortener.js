import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const history = useHistory();

  const handleUrlChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleShortenClick = () => {
    // Your logic to generate the shortened URL goes here

    // Assuming the shortened URL is stored in a variable called `shortUrl`
    // Redirect to the result page with the shortened URL
    history.push(`/result?url=${encodeURIComponent(shortUrl)}`);
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a long URL"
          value={longUrl}
          onChange={handleUrlChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleShortenClick}>
          Shorten URL
        </button>
      </div>
    </div>
  );
};

export default UrlShortener;

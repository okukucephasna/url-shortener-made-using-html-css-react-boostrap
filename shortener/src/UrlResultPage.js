import React from 'react';

const UrlResultPage = (props) => {
  const { search } = props.location;
  const params = new URLSearchParams(search);
  const shortUrl = params.get('url');

  return (
    <div className="container">
      <h1>Shortened URL</h1>
      <div className="form-group">
        <input type="text" className="form-control" value={shortUrl} readOnly />
      </div>
    </div>
  );
};

export default UrlResultPage;

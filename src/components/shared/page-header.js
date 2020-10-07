import React from 'react';
import './page-header.css';

const PageHeader = ({ text }) => (
  <div className="transparent-header">
    <div className="overlay">
      <h1>{ text }</h1>
    </div>
  </div>
);

export default PageHeader;
import React from 'react';

const MainTemplate = ({ header, content }) => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
    <header>{header}</header>
    <main>{content}</main>
  </div>
);

export default MainTemplate;

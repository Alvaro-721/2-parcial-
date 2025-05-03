import React from 'react';
import CardList from './components/organismos/CardList';
import MainTemplate from './components/templates/MainTemplate';

function App() {
  return (
    <MainTemplate
      header={<h1 style={{ textAlign: 'center' }}>Jira Helper Cards</h1>}
      content={<CardList />}
    />
  );
}

export default App;


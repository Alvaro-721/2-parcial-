import React from 'react';
import CardInfo from '../moleculas/CardInfo';

const CardList = () => {
  const cards = [
    { title: 'Tarea 1', description: 'Descripción de tarea 1' },
    { title: 'Tarea 2', description: 'Descripción de tarea 2' },
    { title: 'Tarea 3', description: 'Descripción de tarea 3' },
  ];

  return (
    <div>
      {cards.map((card, i) => (
        <CardInfo key={i} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;

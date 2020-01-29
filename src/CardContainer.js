import React from 'react';
import CardComponent from './CardComponent';

const CardContainer = ({ data }) => {
  const cardList = data.map((user, i) => {
    return (
      <CardComponent
        key={user.url}
        name={user.name}
        species={user.species}
        films={user.films}
      />
    )}
  )
  return (
    <section className='CardContainer'>
      {cardList}
    </section>
  );
}

export default CardContainer;

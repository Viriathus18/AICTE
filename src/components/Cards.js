import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Important Books</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-0.jpg'
              text='book name here'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-0.jpg'
              text='book name here'
              label='Luxury'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-0.jpg'
              text='book name here'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='images/img-0.jpg'
              text='book name here'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-0.jpg'
              text='book name here'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

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
              src='images/img-3.jpg'
              text='Python Programming
              Author Name-Dr. Rupesh Nasre
              Language-English,
              Diploma, 2 year, 3 semester'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Energy Science & Engineering
              English,
              UG, 2 year , 3 semester'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Basic Electrical Engineering
              English,
              UG, 1 year , 1 semester'
              path='/products'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Communication Skills in English
              English,
              Diploma, 1 year , 1 semester'
              path='/products'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Digital Electronics
              English,
              Diploma, 2 year , 3 semester'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

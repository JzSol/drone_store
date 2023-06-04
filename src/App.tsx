import React from 'react';
import './App.scss';
import { Img } from './Components/Img';
import { InfoBox } from './Components/InfoBox';
import { Checkout } from './Components/Checkout';

export const App = () => {
  return (
    <div className='App'>
      <Img />
      <InfoBox />
      <Checkout />
    </div>
  );
};

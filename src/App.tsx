import React, { useState } from 'react';
import './App.scss';
import './styles/infoBox2.scss';

// Importing component modules
import { Img } from './Components/Img';
import { InfoBox } from './Components/InfoBox';
import { Checkout } from './Components/Checkout';

export const App = () => {
  // State variables for various options
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);
  const [option3, setOption3] = useState(0);

  return (
    <div className='App'>
      <Img /> {/* Displaying image */}
      <InfoBox
        option1={option1} // state and setter are passed as props
        setOption1={setOption1}
        option2={option2}
        setOption2={setOption2}
        option3={option3}
        setOption3={setOption3}
      />
      <Checkout
        option1={option1} // states are passed as props
        option2={option2}
        option3={option3}
      />
    </div>
  );
};

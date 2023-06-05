import '../styles/infoBox.scss';

// import { fetchData } from '../api/info';
import { useEffect, useState } from 'react';
import { Info } from '../types/Info';
import { InfoBox2 } from './Infobox2';

type Props = {
  rating: number;
};

const StarRating: React.FC<Props> = ({ rating }) => (
  <div>
    {Array.from({ length: 5 }, (_, i) => {
      const starNumber = i + 1;
      return (
        <span
          key={i}
          style={{ color: starNumber <= rating ? 'orange' : 'black' }}>
          {starNumber <= rating ? '★' : starNumber - 1 < rating ? '⯪' : '☆'}
        </span>
      );
    })}
  </div>
);

export const InfoBox = () => {
  const [data, setData] = useState<Info[]>([]);
  const [error, setError] = useState(false);
  const [timeLeft, setTimeLeft] = useState('2d:01h:56m:49s');

  console.log(data, error);
  useEffect(() => {
    fetch('https://fe-assignment.vaimo.net/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(setData)
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    const countdown = () => {
      const [days, hours, minutes, seconds] = timeLeft
        .split(':')
        .map((part, idx) => {
          // convert everything to seconds
          return parseInt(part) * [24 * 60 * 60, 60 * 60, 60, 1][idx];
        });

      let timeInSeconds = days + hours + minutes + seconds;

      // subtract one second
      timeInSeconds -= 1;

      const newDays = Math.floor(timeInSeconds / (24 * 60 * 60));
      timeInSeconds %= 24 * 60 * 60;
      const newHours = Math.floor(timeInSeconds / (60 * 60));
      timeInSeconds %= 60 * 60;
      const newMinutes = Math.floor(timeInSeconds / 60);
      const newSeconds = timeInSeconds % 60;

      setTimeLeft(
        `${newDays}d:${newHours.toString().padStart(2, '0')}h:${newMinutes
          .toString()
          .padStart(2, '0')}m:${newSeconds.toString().padStart(2, '0')}s`
      );
    };

    // start the countdown
    const intervalId = setInterval(countdown, 1000);

    // cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className='infobox'>
      <div className='badges'>
        <span className='shipping'>Ready to Ship</span>
        <span className='stock'>
          <img
            src='/icons8-ok.png'
            alt='Icon of a checkmark'
            className='okIcon'></img>
          In Stock
        </span>
        <span className='dispatch'>
          <img
            src='/icons8-ok.png'
            alt='Icon of a checkmark'
            className='okIcon'></img>
          Fast Dispatch
        </span>
      </div>

      <div className='title'>
        2021 hot selling GPS 5G quadcopter drone with camera remote control
        aircraft drone WiFi mini drone camera
        {/* <div className='labelBox'> */}
        <span className='label'>Hot sale products</span>
        {/* </div> */}
      </div>

      <div className='ratings'>
        <StarRating rating={4} />
        <div className='ratingcount'> 5.0</div>
        <div className='reviews'> 7 reviews</div>
        <div className='buyers'>19 buyers</div>
      </div>

      <div className='pricebox'>
        <div className='productprice'>
          R 78.50 - R 895.31<div className='discount'>R 98.12 - R 1,119.14</div>
        </div>
        <div className='option'>
          / Option <div className='option2'>2 Options </div>
          <div>(Min. Order)</div>
        </div>
      </div>

      <div className='marchexpo'>
        <img
          src='/MarchExpoLogo.png'
          alt='Logo of March Expo'
          className='expoicon'
        />

        <div className='freeShipping'>• Free shipping (up to $40)</div>
        <div className='delivery'>• On-time delivery guaranteed</div>
      </div>

      <div className='timer'>
        <div className='offer'>20% OFF</div>
        <div className='endsin'> Discount ends in</div>
        <div className='timeleft'>
          <div className='clockIcon'></div>
          {timeLeft}
        </div>
      </div>
      <InfoBox2 />
    </div>
  );
};

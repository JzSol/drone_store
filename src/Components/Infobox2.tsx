import { ChangeEvent, useRef, FocusEvent } from 'react';
import '../styles/infoBox2.scss';
// Import utility to conditionally join classNames
import classNames from 'classnames';

// Define the types for props expected by the component
interface InfoBoxProps {
  option1: number;
  setOption1: React.Dispatch<React.SetStateAction<number>>;
  option2: number;
  setOption2: React.Dispatch<React.SetStateAction<number>>;
  option3: number;
  setOption3: React.Dispatch<React.SetStateAction<number>>;
}

export const InfoBox2: React.FC<InfoBoxProps> = ({
  option1,
  setOption1,
  option2,
  setOption2,
  option3,
  setOption3,
}) => {
  // useRef hooks to store the last valid value
  const lastValidOption1 = useRef(0);
  const lastValidOption2 = useRef(0);
  const lastValidOption3 = useRef(0);

  // Handlers for onChange events of input boxes
  // If the new value is a valid number, updates state and last valid ref
  // If not, the state is not updated
  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setOption1(val);
      lastValidOption1.current = val;
    }
  };
  // Handlers for onBlur events of input boxes
  // If the current value is not valid, resets to the last valid value
  const handleBlur1 = (e: FocusEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 0) {
      setOption1(lastValidOption1.current);
    }
  };

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setOption2(val);
      lastValidOption2.current = val;
    }
  };

  const handleBlur2 = (e: FocusEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 0) {
      setOption2(lastValidOption2.current);
    }
  };

  const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setOption3(val);
      lastValidOption3.current = val;
    }
  };

  const handleBlur3 = (e: FocusEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 0) {
      setOption3(lastValidOption3.current);
    }
  };

  return (
    <>
      <div className='products'>
        <div className='container1'>
          <div className='Option'>Options:</div>
          <div className='quality'>1080p</div>
          <div className='priceoptions'>R 833.99</div>

          <div className='qtyselector'>
            <button
              className={classNames('minusbtn', { orangebtn: option1 > 0 })}
              onClick={() => setOption1(option1 > 0 ? option1 - 1 : 0)}>
              <div
                className={classNames('minus', {
                  activeminus: option1 > 0,
                })}></div>
            </button>

            <input
              type='text'
              className='quantity'
              value={option1}
              onChange={handleChange1}
              onBlur={handleBlur1}
            />

            <button
              className='plusbtn'
              onClick={() => setOption1(option1 + 1)}>
              <div className='plus'></div>
            </button>
          </div>
        </div>

        <div className='container2'>
          <div className='quality'>4K</div>
          <div className='priceoptions'>R 895.31</div>

          <div className='qtyselector'>
            <button
              className={classNames('minusbtn', { orangebtn: option2 > 0 })}
              onClick={() => setOption2(option2 > 0 ? option2 - 1 : 0)}>
              <div
                className={classNames('minus', {
                  activeminus: option2 > 0,
                })}></div>
            </button>

            <input
              type='text'
              className='quantity'
              value={option2}
              onChange={handleChange2}
              onBlur={handleBlur2}
            />

            <button
              className='plusbtn'
              onClick={() => setOption2(option2 + 1)}>
              <div className='plus'></div>
            </button>
          </div>
        </div>

        <div className='container3'>
          <div className='quality'>Battery (accessories)</div>
          <div className='priceoptions'>R 78.50</div>

          <div className='qtyselector'>
            <button
              className={classNames('minusbtn', { orangebtn: option3 > 0 })}
              onClick={() => setOption3(option3 > 0 ? option3 - 1 : 0)}>
              <div
                className={classNames('minus', {
                  activeminus: option3 > 0,
                })}></div>
            </button>

            <input
              type='text'
              className='quantity'
              value={option3}
              onChange={handleChange3}
              onBlur={handleBlur3}
            />

            <button
              className='plusbtn'
              onClick={() => setOption3(option3 + 1)}>
              <div className='plus'></div>
            </button>
          </div>
        </div>
      </div>

      <div className='assurance'>
        <div className='lockicon'></div>
        <div className='tradeassurance'>Trade Assurance</div>
        <div className='assuranceinfo'> protects your Alibaba.com orders</div>
      </div>

      {/* Payment options */}
      <div className='payments'>
        <div className='paymentsinfo'>Payments:</div>
        <svg className='visa' />
        <svg className='mastercard' />
        <svg className='applepay' />
      </div>

      <div className='links'>
        <div className='logistics'>Alibaba.com Logistics</div>
        <div className='solutions'>Inspection Solutions</div>
      </div>
    </>
  );
};

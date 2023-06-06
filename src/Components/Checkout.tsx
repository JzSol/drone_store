import '../styles/checkout.scss';

// Defines the type for the component props
interface Props {
  option1: number;
  option2: number;
  option3: number;
}

// Prices associated with each option
const PRICES = {
  OPTION1: 833.99,
  OPTION2: 895.31,
  OPTION3: 78.5,
};

export const Checkout: React.FC<Props> = ({ option1, option2, option3 }) => {
  // Calculates the total cost based on the options and their respective prices
  const total =
    option1 * PRICES.OPTION1 +
    option2 * PRICES.OPTION2 +
    option3 * PRICES.OPTION3;

  // Formats the total cost to a string with two decimal places and commas as thousand separators
  const formattedTotal = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className='checkout'>
      <div className='upperinfo'>
        <div className='shippinginf'>
          Ship to <u>South Africa by Express UPS Sav…</u>
        </div>
        <div className='price'>r {formattedTotal}</div>
      </div>

      <div className='info'>
        <div className='leadt'>
          <span>Lead Time</span>
          <span className='boldText'>10</span>
          <span>days</span>
          <div className='iconInfo'></div>
        </div>

        <div className='shippingt'>
          <span>Shipping time</span>
          <span className='boldText'>6-10</span>
          <span>days</span>
          <div className='iconInfo'></div>
        </div>
      </div>

      <div className='buttons'>
        <button className='login'>Login to Purchase</button>
        <button className='contact'>
          <div className='mailIcon'></div>Contact the Supplier
        </button>
      </div>
    </div>
  );
};

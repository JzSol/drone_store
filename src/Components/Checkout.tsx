import '../styles/checkout.scss';

export const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='upperinfo'>
        <div className='shippinginf'>
          Ship to <u>South Africa by Express UPS Sav…</u>
        </div>
        <div className='price'>r 6,036.74</div>
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

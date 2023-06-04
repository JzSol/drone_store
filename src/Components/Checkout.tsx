import '../styles/checkout.scss';

export const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='upperinfo'>
        <div className='shippinginf'>
          Ship to South Africa by Express UPS Sav…
        </div>
        <div className='price'>r 6,036.74</div>
      </div>

      <div className='info'>
        <div className='leadt'>Lead Time 10 days</div>
        <div className='shippingt'>Shipping time 6-10 days</div>
      </div>

      <div className='buttons'>
        <button className='login'>Login to Purchase</button>
        <button className='contact'>Contact the Supplier</button>
      </div>
    </div>
  );
};

import PropTypes from 'prop-types';

import { Alert } from '../Alert/Alert';

import s from './TacoItem.module.scss';

function TacoItem({ imageUrl, productPrice, showDiscount = false }) {

  return (
    <div className={s['taco-item']}>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>
        Price: {productPrice}$
        {showDiscount ? <b> - discounted price SALE!!!</b> : null}
      </p>
      <button type="button">Add to cart</button>
      <Alert
        variant="warning"
        outlined={productPrice}
        textCenter={productPrice}
      >
        Here is an orange Alert!
      </Alert>
      <Alert
        variant="success"
        outlined={productPrice}
        textCenter={productPrice}
      >
        Here is an success Alert!
      </Alert>
    </div>
  );
}

TacoItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  showDiscount: PropTypes.bool,
};

export default TacoItem;

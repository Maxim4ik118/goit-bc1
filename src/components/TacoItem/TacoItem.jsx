import PropTypes from 'prop-types';
import cn from 'classnames';
import { Component } from 'react';
import { Alert } from '../Alert/Alert';

import s from './TacoItem.module.scss';
// ({ imageUrl, productPrice, showDiscount = false })
class TacoItem extends Component {
  render() {
    const { id, imageUrl, productPrice, showDiscount, onToggleDiscount, onDeleteTaco } = this.props;

    return (
      <div className={s['taco-item']}>
        {showDiscount && <Alert
          variant="warning"
          outlined={showDiscount}
          textCenter={showDiscount}
        >
          Here is an orange Alert!
        </Alert>}
        <img src={imageUrl} alt="Tacos With Lime" width="640" />
        <h2>
          Tacos With Lime{' '}
          {showDiscount ? <b className={s.discountBage}>SALE</b> : null}
        </h2>
        <p>Price: {productPrice}$</p>
        <button onClick={(e) => onToggleDiscount(id)} className={cn(s.toggleBtn, {
          [s.withDiscount]: showDiscount
        })} type="button">
          {showDiscount ? "Remove discount" : "Apply discount "}
        </button>
        <button onClick={(e) => onDeleteTaco(id)} className={cn(s.toggleBtn)} type="button">
         &times;
        </button>
      </div>
    );
  }
}

TacoItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  showDiscount: PropTypes.bool,
  onToggleDiscount: PropTypes.func.isRequired,
};

export default TacoItem;

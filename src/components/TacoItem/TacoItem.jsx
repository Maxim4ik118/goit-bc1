import PropTypes from 'prop-types';
import cn from 'classnames';
import { Component } from 'react';
import { Alert } from '../Alert/Alert';

import s from './TacoItem.module.scss';
// ({ imageUrl, productPrice, discount = false })
class TacoItem extends Component {
  render() {
    const {
      id,
      imageUrl,
      productPrice,
      productName,
      discount,
      onToggleDiscount,
      onDeleteTaco,
    } = this.props;

    return (
      <div className={s['taco-item']}>
        {discount && (
          <Alert variant="warning" outlined={discount} textCenter={discount}>
            Here is an orange Alert!
          </Alert>
        )}
        <img src={imageUrl} alt="Tacos With Lime" width="640" />
        <h2>
          {productName}{' '}
          {discount ? <b className={s.discountBage}>SALE</b> : null}
        </h2>
        <p>Price: {productPrice}$</p>
        <button
          onClick={e => onToggleDiscount(id)}
          className={cn(s.toggleBtn, {
            [s.withDiscount]: discount,
          })}
          type="button"
        >
          {discount ? 'Remove discount' : 'Apply discount '}
        </button>
        <button
          onClick={e => onDeleteTaco(id)}
          className={cn(s.toggleBtn)}
          type="button"
        >
          &times;
        </button>
      </div>
    );
  }
}

TacoItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  discount: PropTypes.bool,
  onToggleDiscount: PropTypes.func.isRequired,
};

export default TacoItem;

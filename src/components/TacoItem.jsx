import React from 'react'
import PropTypes from 'prop-types';

function TacoItem({ imageUrl, productPrice, showDiscount = false }) {
  return (
    <div>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>
        Price: {productPrice}$
        {showDiscount ? <b> - discounted price SALE!!!</b> : null}
      </p>
      <button type="button">Add to cart</button>
    </div>
  )
}

TacoItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    showDiscount: PropTypes.bool,
  };
  

export default TacoItem;
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './TacoForm.module.scss';

const INITIAL_FORM_DATA = {
  name: '',
  price: '',
  discount: false,
};

export default class TacoForm extends Component {
  state = { ...INITIAL_FORM_DATA };

  handleChange = event => {
    if (event.target.type === 'checkbox') {
      this.setState(prevState => ({
        [event.target.name]: !prevState[event.target.name], // false -> true
      }));

      return;
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      imageUrl:
        'data:image/jpeg;base64,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',
      productPrice: Number.parseFloat(this.state.price),
      productName: this.state.name,
      discount: this.state.discount,
    };
    this.props.onAddTaco(data);
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_FORM_DATA });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("Form is updated");
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <h1>Taco Form</h1>
        <label className={s['input-group']}>
          <span>Taco name:</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter taco name"
            className={s.input}
          />
        </label>
        <label className={s['input-group']}>
          <span>Taco price:</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="price"
            value={this.state.price}
            placeholder="Enter taco price"
            className={s.input}
          />
        </label>
        <label className={s.checkboxGroup}>
          <input
            type="checkbox"
            name="discount"
            checked={this.state.discount}
            onChange={this.handleChange}
            className={s.checkbox}
          />
          <span>apply discount?</span>
        </label>
        <button className={s.submitBtn} type="submit">
          Add taco
        </button>
      </form>
    );
  }
}

TacoForm.propTypes = {
  onAddTaco: PropTypes.func.isRequired,
};

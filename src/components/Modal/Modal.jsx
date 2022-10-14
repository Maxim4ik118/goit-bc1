import React, { Component } from 'react';

import s from './Modal.module.scss';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  close = e => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  handleKeyDown = e => {
    if (e.code !== 'Escape') return;
    
    this.props.onClose();
  };

  render() {
    return (
      <div className={s.backdrop} onClick={this.close}>
        <div className={s.modal}>
          {this.props.children}
          <button className={s.closeBtn} onClick={this.close}>
            &times;
          </button>
        </div>
      </div>
    );
  }
}

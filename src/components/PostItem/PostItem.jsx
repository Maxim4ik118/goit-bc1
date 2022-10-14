import { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './PostItem.module.scss';

class PostItem extends Component {
  render() {
    const { id, title, body, onDeletePost, onModalOpen } = this.props;

    return (
      <div
        className={s['taco-item']}
        
      >
        {/* <img src={imageUrl} alt="Tacos With Lime" width="640" /> */}
        <h2>{title}</h2>
        <p>{body}</p>
        <button
          onClick={e => onDeletePost(id)}
          className={cn(s.toggleBtn)}
          type="button"
        >
          &times;
        </button>
        <button
          onClick={() => onModalOpen({ title, body })}
          className={cn(s.toggleBtn, s.withDiscount)}
          type="button"
        >
          See the details
        </button>
      </div>
    );
  }
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDeletePost: PropTypes.func,
  onModalOpen: PropTypes.func,
};

export default PostItem;

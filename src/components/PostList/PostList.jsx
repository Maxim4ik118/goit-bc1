import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import PostItem from 'components/PostItem/PostItem';

function PostList({ posts, onDeletePost, onModalOpen }) {
  return (
    <div>
      {posts.length > 0 &&
        posts.map(post => {
          const postId = nanoid();
          return (
            <PostItem
              key={postId}
              // id={taco.id}
              // imageUrl={taco.imageUrl}
              // productPrice={taco.productPrice}
              // showDiscount={taco.showDiscount}
              {...post}
              onDeletePost={onDeletePost}
              onModalOpen={onModalOpen}
            />
          );
        })}
    </div>
  );
}
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      onDeletePost: PropTypes.func,
    })
  ),
  onDeletePost: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default PostList;

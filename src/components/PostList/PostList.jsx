import React from 'react';
import PropTypes from 'prop-types';
import PostItem from 'components/PostItem/PostItem';

function PostList({ posts, onDeletePost = () => {} }) {
  return (
    <div>
      {posts.length > 0 &&
        posts.map(post => {
          return (
            <PostItem
              key={post.id}
              // id={taco.id}
              // imageUrl={taco.imageUrl}
              // productPrice={taco.productPrice}
              // showDiscount={taco.showDiscount}
              {...post}
              onDeletePost={onDeletePost}
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
};

export default PostList;

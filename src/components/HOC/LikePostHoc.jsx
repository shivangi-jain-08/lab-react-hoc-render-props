// LikePost.jsx
import React from 'react';
import withLikeCounter from './HOC';

function LikePost({ likeCounter, handleLikeCount }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like Post {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikePost);

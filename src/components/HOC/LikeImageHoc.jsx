// LikeImage.jsx
import React from 'react';
import withLikeCounter from './HOC';

function LikeImage({ likeCounter, handleLikeCount }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like Image {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikeImage);

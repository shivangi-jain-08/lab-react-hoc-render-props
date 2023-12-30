// LikePost.jsx
import React from 'react';
import LikeCounter from './RenderProps';

export default function LikePost() {
  return (
    <LikeCounter>
      {(likeCounter, handleLikeCount) => (
        <div>
          <button onClick={handleLikeCount}>Like Post {likeCounter}</button>
        </div>
      )}
    </LikeCounter>
  );
}

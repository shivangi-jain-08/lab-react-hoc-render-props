// LikeImage.jsx
import React from 'react';
import LikeCounter from './RenderProps';

export default function LikeImage() {
  return (
    <LikeCounter>
      {(likeCounter, handleLikeCount) => (
        <div>
          <button onClick={handleLikeCount}>Like Image {likeCounter}</button>
        </div>
      )}
    </LikeCounter>
  );
}

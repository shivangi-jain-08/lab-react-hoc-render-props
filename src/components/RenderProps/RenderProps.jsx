// renderprops.jsx
import React, { useState } from 'react';

export default function LikeCounter({ children }) {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleLikeCount = () => {
    setLikeCounter(likeCounter + 1);
  };

  return children(likeCounter, handleLikeCount);
}

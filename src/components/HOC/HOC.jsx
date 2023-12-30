// hoc.jsx
import React, { useState } from 'react';

const withLikeCounter = (WrappedComponent) => {
  return function WithLikeCounter(props) {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLikeCount = () => {
      setLikeCounter(likeCounter + 1);
    };

    return (
      <WrappedComponent
        {...props}
        likeCounter={likeCounter}
        handleLikeCount={handleLikeCount}
      />
    );
  };
};

export default withLikeCounter;

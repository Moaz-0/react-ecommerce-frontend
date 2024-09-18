import React, { useState, useEffect } from 'react';
function StarRating({ rating }) {
  // Calculate the filled percentage for stars (e.g., 4.3 will fill 86% of the stars)
  const starPercentage = (rating / 5) * 100;

  return (
    <span className="stars-outer">
      <span className="stars-inner" style={{ width: `${starPercentage}%` }}></span>
    </span>
  );
}

function Rating(props) {
  return (
    <>
      <StarRating rating={props.rating} />
    </>
  );
}

export default Rating;

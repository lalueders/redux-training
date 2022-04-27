import React from 'react';
import { Icon } from '@iconify/react';

export default function Rating() {
  const fullStar = <Icon icon='bi:star-fill' style={{ color: 'orange' }} />;
  const halfStar = <Icon icon='bi:star-half' style={{ color: 'orange' }} />;
  const emptyStar = <Icon icon='bi:star' style={{ color: 'orange' }} />;

  const ratingCount = 3.5;
  let starRatingArray = [];
  let starRating = ratingCount;

  for (let i = 0; i < 5; i++) {
    if (starRating > 1) {
      starRating--;
      starRatingArray.push(fullStar);
    } else if (starRating >= 0.5) {
      starRating = starRating - 0.5;
      starRatingArray.push(halfStar);
    } else {
      starRatingArray.push(emptyStar);
    }
  }

  return (
    <section>
      {starRatingArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </section>
  );
}

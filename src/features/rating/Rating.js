import React from 'react';
import { Icon } from '@iconify/react';

export default function Rating({ rating }) {
  const ratingNumber = (5 / 10) * (rating === null ? '0' : rating.slice(0, 1));
  const filledStar = <Icon icon='bi:star-fill' style={{ color: 'orange' }} />;
  const halfFilledStar = <Icon icon='bi:star-half' style={{ color: 'orange' }} />;
  const emptyStar = <Icon icon='bi:star' style={{ color: 'orange' }} />;

  const starArray = [
    (ratingNumber === 0 && emptyStar) ||
      (ratingNumber === 0.5 && halfFilledStar) ||
      (ratingNumber >= 1 ? filledStar : emptyStar),
    (ratingNumber === 1.5 && halfFilledStar) || (ratingNumber >= 2 ? filledStar : emptyStar),
    (ratingNumber === 2.5 && halfFilledStar) || (ratingNumber >= 3 ? filledStar : emptyStar),
    (ratingNumber === 3.5 && halfFilledStar) || (ratingNumber >= 4 ? filledStar : emptyStar),
    (ratingNumber === 4.5 && halfFilledStar) || (ratingNumber >= 5 ? filledStar : emptyStar),
  ];
  return (
    <p className='rating' aria-label={`rating of ${ratingNumber}`}>
      {starArray.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </p>
  );
}

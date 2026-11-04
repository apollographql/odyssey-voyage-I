import PropTypes from 'prop-types';
import React from 'react';
import {brand} from '../theme';
import {IoStar, IoStarHalf, IoStarOutline} from 'react-icons/io5';

const STAR_COUNT = 5;

export default function ReviewRating({
  edit = false,
  isHalf = false,
  rating = 0,
  setReviewsInput = () => {},
  size = 32,
  isLight = false
}) {
  const color = isLight ? brand.white : brand.black;

  const renderStar = position => {
    const Icon =
      rating >= position
        ? IoStar
        : isHalf && rating >= position - 0.5
          ? IoStarHalf
          : IoStarOutline;

    if (!edit) {
      return <Icon key={position} size={size} color={color} />;
    }

    return (
      <button
        key={position}
        type="button"
        aria-label={`${position} star${position > 1 ? 's' : ''}`}
        onClick={() => setReviewsInput(position)}
        style={{background: 'none', border: 0, padding: 0, cursor: 'pointer'}}
      >
        <Icon size={size} color={color} />
      </button>
    );
  };

  return (
    <div
      role={edit ? 'group' : 'img'}
      aria-label={`${rating} out of ${STAR_COUNT} stars`}
      style={{display: 'inline-flex', gap: 2}}
    >
      {Array.from({length: STAR_COUNT}, (_, i) => renderStar(i + 1))}
    </div>
  );
}

ReviewRating.propTypes = {
  rating: PropTypes.number,
  setReviewsInput: PropTypes.func,
  size: PropTypes.number,
  isHalf: PropTypes.bool,
  edit: PropTypes.bool,
  isLight: PropTypes.bool
};

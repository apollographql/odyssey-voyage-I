import PropTypes from 'prop-types';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import theme from '../theme.js';
import {IoStar, IoStarHalf, IoStarOutline} from 'react-icons/io5';

// https://www.npmjs.com/package/react-rating-stars-component

export default function ReviewRating({
  isHalf = false,
  rating = null,
  setReviewsInput = () => {},
  size = 32
}) {
  const starConfig = {
    size,
    isHalf,
    color: theme.colors.brand.black,
    activeColor: theme.colors.brand.black,
    emptyIcon: <IoStarOutline />,
    halfIcon: <IoStarHalf />,
    filledIcon: <IoStar />
  };

  return (
    <ReactStars
      count={5}
      edit={!rating}
      value={rating}
      onChange={setReviewsInput}
      {...starConfig}
    />
  );
}

ReviewRating.propTypes = {
  rating: PropTypes.number,
  setReviewsInput: PropTypes.func,
  size: PropTypes.number,
  isHalf: PropTypes.bool
};

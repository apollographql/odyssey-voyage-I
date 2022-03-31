import Button from './Button.js';
import PropTypes from 'prop-types';
import React from 'react';
import ReviewRating from './ReviewRating';
import {Flex, Stack, Textarea} from '@chakra-ui/react';

export default function ReviewBox({
  rating,
  setRating,
  handleChange,
  comment,
  submitReview
}) {
  return (
    <Stack>
      <Stack direction="column" spacing="4">
        <ReviewRating rating={rating} setReviewsInput={setRating} edit />
        <Textarea
          placeholder="Write your review here"
          size="lg"
          value={comment}
          onChange={handleChange}
        />
      </Stack>
      ) :
      <Flex justify="right">
        <Button isDisabled={!rating || !comment} onClick={submitReview}>
          Submit Review
        </Button>
      </Flex>
    </Stack>
  );
}

ReviewBox.propTypes = {
  rating: PropTypes.number,
  setRating: PropTypes.func,
  handleChange: PropTypes.func,
  comment: PropTypes.string,
  submitReview: PropTypes.func
};

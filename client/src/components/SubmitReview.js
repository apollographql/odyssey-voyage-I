import Button from './Button.js';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ReviewRating from './ReviewRating';
import {Flex, Stack, Text, Textarea} from '@chakra-ui/react';
import {GET_LOCATION_DETAILS} from '../pages/Location';
import {gql, useMutation} from '@apollo/client';

export const SUBMIT_REVIEW = gql`
  mutation submitReview($locationReview: LocationReviewInput) {
    submitReview(locationReview: $locationReview) {
      code
      success
      message
      locationReview {
        id
        comment
        rating
      }
    }
  }
`;

export default function SubmitReview({locationId}) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const handleChange = event => setComment(event.target.value);

  const [submitReview] = useMutation(SUBMIT_REVIEW, {
    variables: {
      locationReview: {comment, rating: parseInt(rating, 10), locationId}
    },
    refetchQueries: [
      {query: GET_LOCATION_DETAILS, variables: {locationId}}, // DocumentNode object parsed with gql
      'getLocationDetails' // Query name
    ],
    onCompleted: () => setHasSubmittedForm(true)
  });

  return !hasSubmittedForm ? (
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
  ) : (
    <Text as="i">Thanks for writing a review!</Text>
  );
}

SubmitReview.propTypes = {
  locationId: PropTypes.string
};

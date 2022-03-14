import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ReviewBox from './ReviewBox';
import {GET_LOCATION_DETAILS} from '../pages/Location';
import {Text} from '@chakra-ui/react';
import {gql, useMutation} from '@apollo/client';

export const SUBMIT_REVIEW = gql`
  mutation submitReview($review: ReviewInput) {
    submitReview(review: $review) {
      code
      success
      message
      review {
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
      review: {
        comment,
        rating: parseInt(rating, 10),
        id: locationId,
        attractionType: 'location'
      }
    },
    refetchQueries: [
      {query: GET_LOCATION_DETAILS, variables: {locationId}}, // DocumentNode object parsed with gql
      'getLocationDetails' // Query name
    ],
    onCompleted: () => setHasSubmittedForm(true)
  });

  return !hasSubmittedForm ? (
    <ReviewBox
      rating={rating}
      setRating={setRating}
      handleChange={handleChange}
      comment={comment}
      submitReview={submitReview}
    />
  ) : (
    <Text as="i">Thanks for writing a review!</Text>
  );
}

SubmitReview.propTypes = {
  locationId: PropTypes.string
};

import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Input, Select, Button } from '@chakra-ui/react';
import { GET_LOCATION_DETAILS } from '../pages/Location';

export const SUBMIT_REVIEW = gql`
  mutation submitReview($review: ReviewInput) {
    review {
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
  }
`;

export default function SubmitReview({ locationId }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const handleChange = (event) => setComment(event.target.value);

  const [submitReview] = useMutation(SUBMIT_REVIEW, {
    variables: { review: { comment, rating: parseInt(rating, 10), locationId: locationId } },
    refetchQueries: [
      { query: GET_LOCATION_DETAILS, variables: { locationId: locationId } }, // DocumentNode object parsed with gql
      'getLocationDetails', // Query name
    ],
  });

  return (
    <div>
      <Input placeholder="Write your review here" size="lg" value={comment} onChange={handleChange} />
      <Select
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
      <Button onClick={submitReview}>Submit Review</Button>
    </div>
  );
}

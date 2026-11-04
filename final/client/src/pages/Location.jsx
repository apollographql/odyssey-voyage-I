import ReviewRating from '../components/ReviewRating';

import Spinner from '../components/Spinner';
import SubmitReview from '../components/SubmitReview';
import {Error} from './Error';
import {
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  StackSeparator,
  Text
} from '@chakra-ui/react';
import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client/react';
import {useParams} from 'react-router-dom';

export const GET_LOCATION_DETAILS = gql`
  query getLocationDetails($locationId: ID!) {
    location(id: $locationId) {
      id
      name
      description
      photo
      overallRating
      reviewsForLocation {
        id
        comment
        rating
      }
    }
  }
`;

export default function Location() {
  const {id} = useParams();

  const {
    loading,
    error,
    data = {}
  } = useQuery(GET_LOCATION_DETAILS, {
    variables: {locationId: id}
  });
  if (loading) return <Spinner />;
  if (error) return <Error error={error.message} />;
  const {
    name,
    description,
    photo,
    reviewsForLocation: reviews,
    overallRating
  } = data?.location || {};
  return (
    <>
      {data && (
        <Stack direction="column" px="12" gap="6" mb="12">
          <Heading as="h1" size="lg">
            {name}
          </Heading>
          <HStack>
            <ReviewRating isHalf size={16} rating={overallRating || 0} />{' '}
            <div>({reviews.length})</div>
          </HStack>
          <Stack direction="column" gap="6">
            <Image
              src={photo}
              alt={name}
              objectFit="cover"
              width="100%"
              height="500px"
              borderRadius="12"
            />
            <Flex direction="column" justify="space-between">
              <Heading as="h2" py="4" size="md" mb="2">
                About this location
              </Heading>
              <Text fontWeight="regular" mr="1">
                {description}
              </Text>
            </Flex>
          </Stack>
          <Flex direction="row">
            <Stack flex="1" direction="column" gap="12">
              <Stack
                direction="column"
                gap="4"
                separator={<StackSeparator borderColor="gray.200" />}
              >
                <Heading as="h2" size="md" mb="2" marginTop={8}>
                  What other space travelers have to say
                </Heading>
                {reviews.length === 0 ? (
                  <Text>No reviews yet</Text>
                ) : (
                  reviews.map(({comment, rating}, i) => (
                    <Stack
                      direction="column"
                      gap="1"
                      key={`${i}-${rating}`}
                      py="8"
                    >
                      <ReviewRating size={16} rating={rating} />
                      <Text py="2">{comment}</Text>
                    </Stack>
                  ))
                )}
              </Stack>
              <SubmitReview locationId={id} />
            </Stack>
          </Flex>
        </Stack>
      )}
    </>
  );
}

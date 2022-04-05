import LocationCard from '../components/LocationCard';
import ReviewCard from '../components/ReviewCard';
import {Error} from './Error';

import Spinner from '../components/Spinner';
import {
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import {gql, useQuery} from '@apollo/client';

export const GET_LATEST_REVIEWS_AND_LOCATIONS = gql`
  query GetLatestReviewsAndLocations {
    locations {
      id
      name
      description
      overallRating
      photo
      reviewsForLocation {
        id
        comment
        rating
      }
    }
    latestReviews {
      id
      comment
      rating
      location {
        id
        name
      }
    }
  }
`;
export default function HomePage() {
  const {error, loading, data} = useQuery(GET_LATEST_REVIEWS_AND_LOCATIONS);
  if (error) return <Error error={error.message} />;
  return (
    <Stack direction="column" spacing="12">
      <VStack direction="column" spacing="2" py="10">
        <Heading size="2xl">Find yourself in a galaxy far, far away</Heading>
        <Text fontSize="2xl">
          Let&apos;s find the right place for you! Check out what other
          cosmonauts are saying.
        </Text>
      </VStack>
      <Stack direction="column" spacing="4">
        <Heading as="h2" size="lg">
          Latest Reviews
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {loading
            ? [...Array(3)].map((_, i) => (
                <Skeleton
                  borderRadius="8"
                  key={i}
                  height="200px"
                  isLoaded={!loading}
                />
              ))
            : data?.latestReviews.map(review => (
                <ReviewCard key={review.id} {...review} />
              ))}
        </SimpleGrid>
      </Stack>
      <Stack direction="column" spacing="4">
        <Heading as="h2" size="lg">
          Locations
        </Heading>
        {loading ? (
          <Spinner />
        ) : (
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            {data?.locations.map(location => (
              <LocationCard key={location.id} {...location} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Stack>
  );
}

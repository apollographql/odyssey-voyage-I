import Layout from '../layout/Layout';
import LocationCard from '../components/LocationCard';
import ReviewCard from '../components/ReviewCard';

import {Heading, SimpleGrid, Stack} from '@chakra-ui/react';
import {gql, useQuery} from '@apollo/client';

export const GET_LATEST_REVIEWS_AND_LOCATIONS = gql`
  query GetLatestReviewsAndLocations {
    locations {
      id
      name
      description
      overallRating
      photo
      reviews {
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
  const {loading, error, data} = useQuery(GET_LATEST_REVIEWS_AND_LOCATIONS);

  if (loading) return 'Loading...';
  if (error) return `uhoh error! ${error.message}`;
  return (
    <Layout>
      <Stack direction="column" spacing="2">
        <Heading as="h2" size="lg">
          Latest Reviews
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {data &&
            data.latestReviews.map(review => (
              <ReviewCard key={review.id} {...review} />
            ))}
        </SimpleGrid>
        <Heading as="h2" size="lg">
          Locations
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {data &&
            data.locations.map(location => (
              <LocationCard key={location.id} {...location} />
            ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
}

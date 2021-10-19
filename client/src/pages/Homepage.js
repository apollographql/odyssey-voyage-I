import { gql, useQuery } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/react';

import Layout from '../layout/Layout';
import LocationCard from '../components/LocationCard';
export const GET_LOCATIONS = gql`
  query getAllLocations {
    locations {
      id
      name
      photo
      description
      overallRating
    }
  }
`;
export default function HomePage() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return 'Loading...';
  if (error) return `uhoh error! ${error.message}`;
  return (
    <Layout>
      <SimpleGrid columns={[2, null, 3]} spacing={4}>
        {data && data.locations.map((location) => <LocationCard key={location.id} {...location} />)}
      </SimpleGrid>
    </Layout>
  );
}

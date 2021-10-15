import Layout from '../layout/Layout';
import Stars from '../components/Stars';

import { Box, Flex, Heading, Image, Stack, StackDivider, Text } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import SubmitReview from '../components/SubmitReview';

export const GET_LOCATION_DETAILS = gql`
  query getLocationDetails {
    location(id: "location-1") {
      id
      name
      description
      photo
      overallRating
      reviews {
        comment
        rating
      }
    }
  }
`;

export default function Location() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_LOCATION_DETAILS, { variables: { id } });
  if (loading) return 'Loading...';
  if (error) return `uhoh error! ${error.message}`;
  const { name, description, photo, reviews, overallRating } = data?.location;
  return (
    <Layout>
      {data && (
        <Stack direction="column" spacing="6" mb="12">
          <Image src={photo} alt={name} objectFit="cover" width="100%" height="200px" maxH="200px" />
          <Flex direction="row">
            <Stack flex="1" direction="column" spacing="6">
              <Heading as="h1" size="lg">
                {name}
              </Heading>
              <Flex direction="row" justify="space-between">
                <Text fontSize="lg" fontWeight="regular" mr="1">
                  {description}
                </Text>
              </Flex>
              <Stack direction="row" spacing="4" align="center"></Stack>
              <Box>
                <Heading as="h2" size="md" mb="2">
                  Reviews
                </Heading>
                <SubmitReview locationId={id} />
                <Stack direction="column" spacing="4" divider={<StackDivider borderColor="gray.200" />}>
                  {reviews.length === 0 ? (
                    <Text>No reviews yet</Text>
                  ) : (
                    reviews.map(({ comment, rating }) => (
                      <Stack direction="column" spacing="1" key={rating}>
                        <Stars size={16} rating={rating} />
                        <Text>{rating}</Text>
                      </Stack>
                    ))
                  )}
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Stack>
      )}
    </Layout>
  );
}

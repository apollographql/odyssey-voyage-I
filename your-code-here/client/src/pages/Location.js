import Layout from '../layout/Layout';
import ReviewRating from '../components/ReviewRating';

import SubmitReview from '../components/SubmitReview';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import {gql, useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';

export const GET_LOCATION_DETAILS = gql`
  query getLocationDetails($locationId: ID!) {
    location(id: $locationId) {
      id
      name
      description
      photo
      overallRating
      reviews {
        id
        comment
        rating
      }
    }
  }
`;

export default function Location() {
  const {id} = useParams();

  const {loading, error, data} = useQuery(GET_LOCATION_DETAILS, {
    variables: {locationId: id}
  });
  if (loading) return 'Loading...';
  if (error) return `uhoh error! ${error.message}`;
  const {name, description, photo, reviews} = data?.location;
  return (
    <Layout>
      {data && (
        <Stack direction="column" spacing="6" mb="12">
          <Center height="100">
            <Heading as="h1" size="lg">
              {name}
            </Heading>
          </Center>
          <Stack direction={['column', 'column', 'row']} spacing="6">
            <Image
              src={photo}
              alt={name}
              objectFit="cover"
              width="100%"
              height="200px"
              maxH="200px"
            />
            <Flex direction="row" justify="space-between">
              <Text fontSize="lg" fontWeight="regular" mr="1">
                {description}
              </Text>
            </Flex>
          </Stack>
          <Flex direction="row">
            <Stack flex="1" direction="column" spacing="12">
              <Box>
                <Heading as="h2" size="md" mb="2">
                  Reviews
                </Heading>
                <SubmitReview locationId={id} />
              </Box>
              <Stack
                direction="column"
                spacing="4"
                divider={<StackDivider borderColor="gray.200" />}
              >
                {reviews.length === 0 ? (
                  <Text>No reviews yet</Text>
                ) : (
                  reviews.map(({comment, rating}, i) => (
                    <Stack
                      direction="column"
                      spacing="1"
                      key={`${i}-${rating}`}
                    >
                      <ReviewRating size={16} rating={rating} />
                      <Text>{comment}</Text>
                    </Stack>
                  ))
                )}
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      )}
    </Layout>
  );
}

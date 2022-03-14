import ReviewRating from '../components/ReviewRating';
import Spinner from '../components/Spinner';
import SubmitReview from '../components/SubmitActivityReview';
// import StatsBar from '../components/StatsBar';
import BackLink from '../components/BackLink';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  Wrap
} from '@chakra-ui/react';
import {Error} from './Error';
import {Link, useParams} from 'react-router-dom';
import {gql, useQuery} from '@apollo/client';

export const GET_ACTIVITY_DETAILS = gql`
  query getActivityDetails($activityId: ID!) {
    activity(id: $activityId) {
      id
      name
      description
      photo
      overallRating
      terrain
      # stats {
      #   averageTemperature
      #   gravity
      #   lengthOfDay
      #   exosuitRequired
      #   minimumAge
      #   groupSize
      # }
      location {
        id
        name
        photo
        activities {
          id
          name
          photo
          terrain
        }
      }
      reviews {
        id
        comment
        rating
      }
    }
  }
`;

export default function Activity() {
  const {id} = useParams();

  const {loading, error, data} = useQuery(GET_ACTIVITY_DETAILS, {
    variables: {activityId: id}
  });
  if (loading) return <Spinner />;
  if (error) return <Error error={error.message} />;
  const {
    name,
    description,
    photo,
    reviews,
    overallRating,
    location
    // terrain,
    // stats
  } = data?.activity;
  const {id: locationId, name: locationName, activities} = location;

  const otherActivities = activities.filter(a => a.id !== id);

  return (
    <>
      {data && (
        <Stack direction="column" px="12" spacing="6" mb="12">
          <BackLink
            link={`/location/${locationId}`}
            label={`Back to ${locationName}`}
          />
          <Stack
            direction="row"
            alignContent="center"
            alignItems="flex-end"
            spacing="4"
          >
            <Heading as="h1" size="lg">
              {name} on {locationName}
            </Heading>
          </Stack>
          <HStack>
            <ReviewRating isHalf size={16} rating={overallRating || 0} />{' '}
            <div>({reviews.length})</div>
          </HStack>
          <Stack direction="column" spacing="6">
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
                About this activity
              </Heading>
              <Text fontWeight="regular" mr="1">
                {description}
              </Text>
            </Flex>
          </Stack>
          <Stack>
            {/* <StatsBar type="Activity" stats={stats} terrain={terrain} /> */}
            <Heading as="h2" size="md" mb="2" marginTop={8}>
              Explore more to do on {locationName}
            </Heading>
            <Wrap spacing="12" alignItems="flex-end">
              {!!otherActivities.length && (
                <Stack>
                  {otherActivities.map(({id, name, photo, terrain}, i) => (
                    <Stack key={i} as={Link} to={`${id}`}>
                      <Image
                        src={photo}
                        alt={name}
                        maxWidth="400px"
                        borderRadius="12"
                      />
                      <Box>
                        <Text
                          fontFamily="emphasis"
                          fontWeight="bold"
                          color="brand.gray"
                        >
                          {terrain} ACTIVITY
                        </Text>
                        <Text fontWeight="bold" fontSize={20}>
                          {name}
                        </Text>
                      </Box>
                    </Stack>
                  ))}
                  <BackLink
                    link={`/location/${locationId}`}
                    label={`Back to ${locationName}`}
                  />
                </Stack>
              )}
            </Wrap>
          </Stack>
          <Flex direction="row">
            <Stack flex="1" direction="column" spacing="12">
              <Stack
                direction="column"
                spacing="4"
                divider={<StackDivider borderColor="gray.200" />}
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
                      spacing="1"
                      key={`${i}-${rating}`}
                      py="8"
                    >
                      <ReviewRating size={16} rating={rating} />
                      <Text py="2">{comment}</Text>
                    </Stack>
                  ))
                )}
              </Stack>
              <SubmitReview activityId={id} />
            </Stack>
          </Flex>
        </Stack>
      )}
    </>
  );
}

import Button from './Button.js';
import PropTypes from 'prop-types';
import ReviewRating from './ReviewRating';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  usePrefersReducedMotion
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function LocationCard({
  id,
  name,
  photo,
  overallRating,
  reviewsForLocation: reviews = []
}) {
  const {comment} = reviews[0] ?? {};
  const prefersReducedMotion = usePrefersReducedMotion();

  const zoomAnimation = prefersReducedMotion
    ? {}
    : {
        transform: 'scale(1.1)',
        opacity: '100%'
      };

  return (
    <Box role="group" overflow="hidden" as={Link} to={`/location/${id}`}>
      <Box borderRadius="lg" maxHeight="250px" width="100%" overflow="hidden">
        <Image
          transition="0.3s all ease-in-out"
          opacity={'95%'}
          _groupHover={zoomAnimation}
          _groupFocus={zoomAnimation}
          src={photo}
          alt={name}
          objectFit="cover"
        />
      </Box>
      <Flex direction="column" p="3" justify="space-between" minH="120px">
        <Heading as="h2" size="md" my="4">
          {name}
        </Heading>
        {overallRating ? (
          <Flex direction="column" minH="100px" justify="space-between">
            <Text as="i" noOfLines={2}>{`"${comment}"`}</Text>
            <Flex direction="row" py="4" justify="space-between">
              <ReviewRating isHalf rating={overallRating} size={20} />
              <Button>Read More</Button>
            </Flex>
          </Flex>
        ) : (
          <Flex direction="row" justify="right">
            <Button>Leave a Review</Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

LocationCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  overallRating: PropTypes.number,
  reviewsForLocation: PropTypes.array
};

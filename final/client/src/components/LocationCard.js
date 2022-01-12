import Button from './Button.js';
import PropTypes from 'prop-types';
import ReviewRating from './ReviewRating';
import {Box, Flex, Heading, Image, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function LocationCard({
  id,
  name,
  photo,
  overallRating,
  reviews = []
}) {
  const {comment} = reviews[0] ?? {};
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        background: 'gray.100',
        cursor: 'pointer'
      }}
      as={Link}
      to={`/location/${id}`}
    >
      <Image
        src={photo}
        alt={name}
        boxSize="100%"
        maxH="200px"
        objectFit="cover"
      />
      <Flex direction="column" p="3" justify="space-between" minH="120px">
        <Heading as="h2" size="md">
          {name}
        </Heading>
        {overallRating ? (
          <Flex direction="column" minH="100px" justify="space-between">
            <Text as="i" noOfLines={2}>{`"${comment}"`}</Text>
            <Flex direction="row" justify="space-between">
              <ReviewRating isHalf rating={overallRating} size={20} />
              <Text fontWeight="bold" textDecoration="underline">
                Read More
              </Text>
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
  reviews: PropTypes.array
};

import PropTypes from 'prop-types';
import ReviewRating from './ReviewRating';
import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function LocationCard({rating, comment, location}) {
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
      to={`/location/${location.id}`}
    >
      <Flex
        height="100%"
        direction="column"
        p="3"
        justify="space-between"
        minH="120px"
      >
        <Text mb={2}>{comment}</Text>
        <Flex direction="row" width="100%" justify="space-between">
          <ReviewRating size={12} rating={rating} />
          <Heading as="h3" size="md">
            {location.name}
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
}

LocationCard.propTypes = {
  id: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.number,
  location: PropTypes.object
};

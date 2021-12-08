import Stars from './Stars';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LocationCard({ id, name, photo, overallRating }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        background: 'gray.100',
        cursor: 'pointer',
      }}
      as={Link}
      to={`/location/${id}`}
    >
      <Image src={photo} alt={name} boxSize="100%" maxH="200px" objectFit="cover" />
      <Flex direction="column" p="3" justify="space-between" minH="120px">
        <Heading as="h2" size="md">
          {name}
        </Heading>
        <Flex direction="row" justify="space-between">
          <Stars size={20} rating={overallRating} />
        </Flex>
      </Flex>
    </Box>
  );
}

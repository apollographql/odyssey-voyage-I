import {Box, HStack, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {Logo} from './Logo';

export default function Nav() {
  return (
    <Box as={Link} to="/">
      <HStack p="4">
        <Logo />
        <Text
          textTransform={'uppercase'}
          fontWeight="600"
          fontSize="14px"
          color="brand.400"
          letterSpacing="1.4px"
          backgroundColor="brand.100"
          px="1"
        >
          flyby
        </Text>
      </HStack>
    </Box>
  );
}

import PropTypes from 'prop-types';
import {Box, Heading, Text, VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function Nav({isLight}) {
  const txtColor = isLight ? '#fff' : '#000';

  return (
    <Box px="2" py="8" borderTopWidth="20px" borderColor="brand.200">
      <Box as={Link} to="/">
        <VStack justify="space-between" spacing="1">
          <Heading
            fontSize="5xl"
            fontFamily="sans-serif"
            letterSpacing="widest"
            fontWeight="extrabold"
            textColor={txtColor}
          >
            flyby
          </Heading>
          <Text fontWeight="extrabold" textColor={txtColor}>
            Location Reviews
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  isLight: PropTypes.bool
};

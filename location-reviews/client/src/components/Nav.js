import PropTypes from 'prop-types';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Nav({ isLight }) {
  const txtColor = isLight ? '#fff' : '#000';

  return (
    <Box px="2">
      <Flex direction="row" justify="space-between" align="center" p={4}>
        <Box as={Link} to="/">
          <HStack spacing="2">
            <Text fontWeight="extrabold" fontSize="2xl" textColor={txtColor}>
              Location Reviews
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

Nav.propTypes = {
  isLight: PropTypes.bool,
};

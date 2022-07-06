import PropTypes from 'prop-types';
import React from 'react';
import {Box, Heading, Text, VStack} from '@chakra-ui/react';

export const Error = ({children, code, error}) => (
  <VStack spacing="12">
    <VStack textAlign="center">
      <Heading size="4xl">{code}</Heading>
      <Heading fontSize="3xl">Houston, something went wrong on our end</Heading>
      <Text>Please review the information below for more details.</Text>
    </VStack>
    {error && (
      <Box
        maxW="500px"
        p="6"
        border="2px"
        borderRadius="8px"
        borderColor="brand.light"
      >
        <Text color="brand.error">{error}</Text>
      </Box>
    )}
    {children}
  </VStack>
);

Error.propTypes = {
  code: PropTypes.string,
  error: PropTypes.string.isRequired,
  children: PropTypes.node
};

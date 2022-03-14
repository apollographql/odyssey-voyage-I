import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Text} from '@chakra-ui/react';

export default function BackLink({link, label}) {
  return (
    <Text
      fontWeight="bold"
      color="brand.300"
      _hover={{color: 'brand.400'}}
      _focus={{color: 'brand.400'}}
      as={Link}
      to={link}
    >
      ← {label}
    </Text>
  );
}

BackLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string
};

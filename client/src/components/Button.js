import PropTypes from 'prop-types';
import {Button} from '@chakra-ui/react';

const ThemeButton = ({children, ...props}) => (
  <Button
    bg="brand.200"
    _hover={{bg: 'brand.100'}}
    _focus={{bg: 'brand.100'}}
    color="brand.white"
    {...props}
  >
    {children}
  </Button>
);

ThemeButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeButton;

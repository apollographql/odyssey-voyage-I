import Nav from '../components/Nav';
import PropTypes from 'prop-types';
import {Container} from '@chakra-ui/react';

export default function Layout({
  noNav,
  children,
  containerSize = 'container.xl'
}) {
  return (
    <>
      {!noNav && <Nav />}
      <Container py="4" maxW={containerSize}>
        {children}
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  noNav: PropTypes.bool,
  containerSize: PropTypes.string
};

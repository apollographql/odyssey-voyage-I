import Button from '../components/Button';
import React from 'react';
import {Error} from './Error';
import {Link} from 'react-router-dom';

export const Fallback = () => (
  <Error code="404" error="This page could not be found">
    <Button as={Link} to="/">
      Home
    </Button>
  </Error>
);

export default Fallback;

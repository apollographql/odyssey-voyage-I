import '@apollo/space-kit/reset.css';
import {extendTheme} from '@chakra-ui/react';

export default extendTheme({
  colors: {
    brand: {
      black: '#12151A',
      white: '#FCFDFF',
      gray: '#5A6270',
      light: '#959DAA',
      lighter: '#DEE2E7',
      100: '#D9CFFF',
      200: '#AD9BF6',
      300: '#7156D9',
      400: '#3F20BA',
      midnight: '#1B2240',
      error: '#9C2323'
    }
  },
  fonts: {
    heading: "'Source Sans Pro', sans-serif",
    body: "'Source Sans Pro', sans-serif",
    emphasis: "'Source Code Pro', serif"
  }
});

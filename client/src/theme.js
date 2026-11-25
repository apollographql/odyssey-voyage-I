import '@apollo/space-kit/reset.css';
import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react';

export const brand = {
  black: '#12151A',
  white: '#FCFDFF',
  light: '#DEE2E7',
  100: '#D9CFFF',
  200: '#AD9BF6',
  300: '#7156D9',
  400: '#3F20BA',
  midnight: '#1B2240',
  error: '#9C2323'
};

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: Object.fromEntries(
          Object.entries(brand).map(([key, value]) => [key, {value}])
        )
      },
      fonts: {
        heading: {value: "'Source Sans Pro', sans-serif"},
        body: {value: "'Source Sans Pro', sans-serif"}
      }
    }
  }
});

export default createSystem(defaultConfig, config);

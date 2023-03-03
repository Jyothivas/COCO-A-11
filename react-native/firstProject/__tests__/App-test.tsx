
import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Components', () => {
   it('App component render correctly', () => {
      const app = render(<App />);
      
      const someText = app.getByText('Some Text');
      expect(someText).toBeDefined();

      const helloWorldText = app.getByText('Hello, World!');
      expect(helloWorldText).toBeDefined();

      const moreText = app.getByText('Some more text');
      expect(moreText).toBeDefined();

      const image = app.getByTestId('cat-image');
      expect(image).toBeDefined();
   });
});




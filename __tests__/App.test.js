/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../App';
import {render} from '@testing-library/react-native';

test('renders correctly', () => {
  const {toJSON} = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});

describe('Check input field data', () => {
  test('', () => {
    
  });
});

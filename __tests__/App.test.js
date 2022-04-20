import React from 'react';
import 'react-native';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';

test('renders correctly', () => {
  const {toJSON} = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});

const component = <App />;

describe('Check input field data', () => {
  test('Displays a username, if the username field has been completed', () => {
    const INPUT_TEXT = 'John';
    const {getByTestId, getByText} = render(component);
    const userNameTextInput = getByTestId('App.username');
    fireEvent.changeText(userNameTextInput, INPUT_TEXT);
    const username = getByText(INPUT_TEXT);
    expect(username).toBeTruthy();
  });

  test('Displays a userage, if the userage field has been completed', () => {
    const INPUT_TEXT = '25';
    const {getByTestId, getByText} = render(component);
    const userAgeTextInput = getByTestId('App.userage');
    fireEvent.changeText(userAgeTextInput, INPUT_TEXT);
    const userage = getByText(INPUT_TEXT);
    expect(userage).toBeTruthy();
  });
});

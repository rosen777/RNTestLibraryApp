import React from 'react';
import 'react-native';
import App from '../App';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';

test('renders correctly', () => {
  const {toJSON} = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});

const component = <App />;

describe('Check input field data', () => {
  test('Displays a username, if the username field has been completed', async () => {
    const INPUT_TEXT = 'John';
    const {getByText, getByPlaceholderText} = render(component);
    await waitFor(() => {
      const nameInput = getByPlaceholderText('Name');
      fireEvent.changeText(nameInput, INPUT_TEXT);
      const username = getByText(INPUT_TEXT);
      expect(username).toBeTruthy();
    });
  });

  test('Displays a userage, if the userage field has been completed', async () => {
    const INPUT_TEXT = '25';
    const {getByTestId, getByText} = render(component);
    await waitFor(() => {
      const userAgeTextInput = getByTestId('App.userage');
      fireEvent.changeText(userAgeTextInput, INPUT_TEXT);
      const userage = getByText(INPUT_TEXT);
      expect(userage).toBeTruthy();
    });
  });
});

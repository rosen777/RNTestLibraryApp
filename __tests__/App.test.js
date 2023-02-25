import React from 'react';
import 'react-native';
import App from '../App';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {setupTestAppServer} from '../src/mocks/testAppServer';
import {store} from '../src/app/store';
import {Provider} from 'react-redux';

setupTestAppServer();

afterEach(() => {
  jest.clearAllMocks();
});

const component = (
  <Provider store={store}>
    <App />
  </Provider>
);

test('renders correctly', () => {
  const {toJSON} = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});

describe('Check input field data', () => {
  test('Displays a username, if the username field has been completed', async () => {
    const INPUT_TEXT = 'John';
    const {findByTestId, findByText} = render(component);
    const nameTextInput = await findByTestId('App.username');
    fireEvent.changeText(nameTextInput, INPUT_TEXT);
    const submitButton = await findByText('Submit');
    fireEvent.press(submitButton);
    const usernameText = await findByText('John');
    expect(usernameText).toBeDefined();
  });

  test('Displays a userage, if the userage field has been completed', async () => {
    const INPUT_TEXT = '35';
    const {findByTestId, findByText} = render(component);
    const ageTextInput = await findByTestId('App.userage');
    fireEvent.changeText(ageTextInput, INPUT_TEXT);
    const submitButton = await findByText('Submit');
    fireEvent.press(submitButton);
    const userageText = await findByText('35');
    expect(userageText).toBeDefined();
  });

  test('Displays a name when the country is selected from the dropdown, a phone number is inputted, and the submit button is pressed', async () => {
    const INPUT_TEXT = '7491111111';
    const {findByTestId, findByText} = render(component);
    const phoneTextInput = await findByTestId('App.phone');
    fireEvent.changeText(phoneTextInput, INPUT_TEXT);
    const submitButton = await findByText('Submit');
    fireEvent.press(submitButton);
    const phoneText = await findByText('447491111111');
    expect(phoneText).toBeDefined();
  });
});

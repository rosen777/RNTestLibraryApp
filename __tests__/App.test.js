import React from 'react';
import 'react-native';
import App from '../App';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {setupTestAppServer} from '../src/mocks/testAppServer';

setupTestAppServer();

afterEach(() => {
  jest.clearAllMocks();
});

const component = <App />;

describe('Check input field data', () => {
  test('Displays a name, if the name field has been completed', async () => {
    const INPUT_TEXT = 'John';
    render(component);
    const nameTextInput = await screen.findByTestId('App.username');
    fireEvent.changeText(nameTextInput, INPUT_TEXT);
    const submitButton = screen.getByText('Submit');
    fireEvent.press(submitButton);
    const usernameText = screen.getByText('John');
    expect(usernameText).toBeDefined();
  });

  test('Displays a userage, if the userage field has been completed', async () => {
    const INPUT_TEXT = '35';
    render(component);
    const ageTextInput = await screen.findByTestId('App.userage');
    fireEvent.changeText(ageTextInput, INPUT_TEXT);
    const submitButton = screen.getByText('Submit');
    fireEvent.press(submitButton);
    const userageText = screen.getByText('35');
    expect(userageText).toBeDefined();
  });

  test('Displays a phone number when the country is selected from the dropdown, a phone number is inputted, and the submit button is pressed', async () => {
    const INPUT_TEXT = '7491111111';
    render(component);
    const phoneTextInput = await screen.findByTestId('App.phone');
    fireEvent.changeText(phoneTextInput, INPUT_TEXT);
    const submitButton = screen.getByText('Submit');
    fireEvent.press(submitButton);
    const phoneText = screen.getByText('447491111111');
    expect(phoneText).toBeDefined();
  });
});

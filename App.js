import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {store} from './src/app/store';
import User from './src/User';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
};

export default App;

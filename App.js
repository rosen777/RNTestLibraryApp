import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {store} from './src/app/store';
import User from './src/User';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/services';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <User />
      </Provider>
    </ApolloProvider>
  );
};

export default App;

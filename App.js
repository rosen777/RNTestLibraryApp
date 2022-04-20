import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [userage, setUserage] = useState('');
  const onChangeUserName = name => {
    setUsername(name);
  };
  const onChangeUserAge = age => {
    setUserage(age);
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Your new username is {username}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserName(text)}
          value={username}
          placeholder="Username"
          testID="App.username"
        />
        <Text>Your new user age is {userage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserAge(text)}
          value={userage}
          placeholder="Userage"
          testID="App.userage"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
});

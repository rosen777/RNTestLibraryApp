import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUsername, setUserage} from './redux/slices/userSlice';

const User = () => {
  const username = useSelector(state => state.user.name);
  const userage = useState(state => state.user.age);
  const dispatch = useDispatch();

  const onChangeUserName = name => {
    dispatch(setUsername(name));
  };
  const onChangeUserAge = age => {
    dispatch(setUserage(age));
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Your new username is </Text>
        <Text>{username}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserName(text)}
          value={username}
          placeholder="Username"
          testID="App.username"
        />
        <Text>Your new user age is </Text>
        <Text>{userage}</Text>
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

export default User;

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

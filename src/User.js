import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUserName, setUserAge, setUserPhone} from './redux/slices/userSlice';
import {useQuery} from '@apollo/client';
import {getCountries} from './services/countries/getCountries';
import DropDownPicker from 'react-native-dropdown-picker';

const User = () => {
  const username = useSelector(state => state.user.name);
  const userage = useSelector(state => state.user.age);
  const userPhone = useSelector(state => state.user.phone);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [openCountries, setOpenCountries] = useState(false);
  const {loading, error, data} = useQuery(getCountries);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('44');
  const [countries, setCountries] = useState([]);
  const [countriesError, setCountriesError] = useState();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      if (error) {
        setCountriesError(error);
      }
      if (data) {
        setCountries(data);
      }
    }
  }, [loading, data, error]);

  useEffect(() => {
    setCountries(data);
    handleTransformDropdown(data);
  }, [data]);

  const onChangeUserName = name => {
    dispatch(setUserName(name));
  };

  const onChangeUserAge = age => {
    dispatch(setUserAge(age));
  };

  const onChangePhoneNumber = event => {
    const phoneWithCountryCode = `${value}${event.nativeEvent.text}`;
    console.log(phoneWithCountryCode);

    dispatch(setUserPhone(phoneWithCountryCode));
  };

  const handleTransformDropdown = countriesData => {
    if (countriesData && items.length === 0) {
      const dropdownData = countriesData.countries.reduce(
        (acc, currValue, currIndex) => {
          if (
            !acc.includes({
              value: currValue.phone,
              label: `${currValue.emoji} +${currValue.phone}`,
              index: currIndex.toString(),
              countryCode: currValue.phone,
            })
          ) {
            acc.push({
              value: currValue.phone,
              label: `${currValue.emoji} +${currValue.phone}`,
              index: currIndex.toString(),
              countryCode: currValue.phone,
            });
          }
          return acc;
        },
        [],
      );
      setItems(dropdownData);
    }
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.wrapper}>
          <Text style={styles.text}>Your name is </Text>
          <Text style={styles.text}>{username}</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeUserName(text)}
            value={username}
            placeholder="Name"
            testID="App.username"
          />
          <Text style={styles.text}>Your age is </Text>
          <Text style={styles.text}>{userage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeUserAge(text)}
            value={userage}
            placeholder="Userage"
            testID="App.userage"
          />
          <View>
            <Text style={styles.text}>Your phone is </Text>
            <Text style={styles.text}>{userPhone}</Text>
            <View style={styles.dropDownWrapper}>
              <DropDownPicker
                open={openCountries}
                value={value}
                items={items}
                setOpen={setOpenCountries}
                setValue={setValue}
                setItems={setItems}
                placeholder="Country"
                labelProps={{
                  numberOfLines: 1,
                }}
                itemKey={`c-${items.index}`}
              />
              <TextInput
                style={styles.fullInput}
                onChangeText={text => setPhone(text)}
                onEndEditing={event => onChangePhoneNumber(event)}
                value={phone}
                placeholder="Phone"
                testID="App.phone"
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  fullInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 230,
    bottom: 8,
  },
  inputContainer: {
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginLeft: 20,
  },
  dropDownWrapper: {
    marginHorizontal: 12,
    marginTop: 20,
    maxWidth: 130,
    flexDirection: 'row',
  },
  wrapper: {
    flexGrow: 1,
    marginTop: 20,
  },
});

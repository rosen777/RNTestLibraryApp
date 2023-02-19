import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  phone: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    setUserAge: (state, action) => {
      state.age = action.payload;
    },
    setUserPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const {setUserName, setUserAge, setUserPhone} = userSlice.actions;

export default userSlice.reducer;

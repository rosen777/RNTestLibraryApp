import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.name = action.payload;
    },
    setUserage: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const {setUsername, setUserage} = userSlice.actions;

export default userSlice.reducer;

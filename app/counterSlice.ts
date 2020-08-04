import {createSlice} from '@reduxjs/toolkit';

type CounterState = number;
const initialState: CounterState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => state + 1,
    decrement: (state: CounterState) => state - 1,
  },
});

export const {increment, decrement} = counterSlice.actions;

export const counterSelector = (state: {counter: CounterState}) =>
  state.counter;

export const counterReducer = counterSlice.reducer;

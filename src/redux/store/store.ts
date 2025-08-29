import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/counter/counterSlice";
import habitsReducer from "../slices/habits/habitSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    habits: habitsReducer,
  },

});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

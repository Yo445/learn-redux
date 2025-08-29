import { createSlice } from "@reduxjs/toolkit";

interface Habit {
  id: number;
  name: string;
  frequency: 'daily' | 'weekly' | 'monthly' ;
  createdAt: string;
  completedDates: string[];

}
interface habitState {
  habits: Habit[];

}

const initialState: habitState = {
    habits: [],
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addhabit: () => {

    },

  },
});
export const { addhabit } = habitSlice.actions;
export default habitSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./reducers/covidSlice";
import personalInfoReducer from "./reducers/personalInfoSlice";
import redberrianSlice from "./reducers/redberrianSlice";
import skillReducer from "./reducers/skillSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    skill: skillReducer,
    covid: covidReducer,
    redberrian: redberrianSlice,
  },
});

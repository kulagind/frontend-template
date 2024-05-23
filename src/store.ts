import { configureStore } from "@reduxjs/toolkit";
import TestReducer from "./app/Test.store";

export const store = configureStore({
  reducer: {
    test: TestReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

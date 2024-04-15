import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { rootReducer } from "../slice/rootReducer";

//store
export const store = configureStore({
  reducer: rootReducer,
});

//wrapper store
export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// dispatch할 때 사용(타입 미리 지정)
export const useAppDispatch = () => useDispatch<AppDispatch>();

//useSelect할 때 사용(타입 미리 지정)
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

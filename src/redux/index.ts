import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import visitorReducer from "./slices/visitorSlice";
import smsReducer from './slices/smsSlice';
import storage from "./customStorage";
import logger from 'redux-logger';


const visitorConfig = {
  key: "visitor",
  storage,
};

const smsConfig = {
  key: "sms",
  storage,
};

const rootReducer = combineReducers({
  visitor: persistReducer(visitorConfig, visitorReducer),
  sms: persistReducer(smsConfig, smsReducer)
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'development' ? getDefaultMiddleware({ serializableCheck: false }).concat(logger) 
    : getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
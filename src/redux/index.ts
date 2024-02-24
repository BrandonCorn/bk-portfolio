import { ThunkAction, combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import visitorReducer from "./slices/visitorSlice/visitorSlice";
import messageReducer from './slices/messageSlice/messageSlice';
import postReducer from './slices/postSlice/postSlice';
import commentReducer from './slices/commentSlice/commentSlice';
import storage from "./customStorage";
import logger from 'redux-logger';


const visitorConfig = {
  key: "visitor",
  storage,
};

const messageConfig = {
  key: "messages",
  storage,
};

const postConfig = {
  key: 'posts',
  storage,
}

const commentConfig = {
  key: 'comments',
  storage
}

const rootReducer = combineReducers({
  visitor: persistReducer(visitorConfig, visitorReducer),
  sms: persistReducer(messageConfig, messageReducer),
  posts: persistReducer(postConfig, postReducer),
  comments: persistReducer(commentConfig, commentReducer),
});


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'development' ? getDefaultMiddleware({ serializableCheck: false }).concat(logger) 
    : getDefaultMiddleware({serializableCheck: false})
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




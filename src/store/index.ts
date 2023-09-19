import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userDataReducer from './userData';
import loadingReducer from "./Loading";

const persistConfig = {
    key: 'portal',
    storage,
    whitelist: ['userData']
  }
  
  const ReducerCombine = combineReducers({
    userData: userDataReducer,
    loading: loadingReducer
  })

  const persistedReducer = persistReducer(persistConfig, ReducerCombine)
  
  export const store = configureStore({
    reducer: persistedReducer,
    //devTools: import.meta.env.MODE !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
  })
  
  export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
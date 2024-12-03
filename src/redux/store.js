import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { filterReducer } from "./filterSlice";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

const persistedReducerContacts = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
    reducer: {
      contacts: persistedReducerContacts,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export let persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contactsPersistor',
    storage,
};

const persistConfigFilter = {
  key: 'filter',
  storage,
}


const persistedReducerContacts = persistReducer(persistConfig, contactReducer);
const persistedReducerFilter = persistReducer(persistConfigFilter, filterReducer);

export const store = configureStore({
    reducer: {
      contacts: persistedReducerContacts,
      filter: persistedReducerFilter,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export let persistor = persistStore(store);
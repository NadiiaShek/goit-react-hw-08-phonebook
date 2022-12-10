import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, authReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

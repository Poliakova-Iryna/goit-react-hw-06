import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: {
          items: []
    },
};

const slice = createSlice ({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
});

export const selectContacts = state => state.contacts.items;
export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;

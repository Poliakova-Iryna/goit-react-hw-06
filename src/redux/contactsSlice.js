import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
   filters: '',
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

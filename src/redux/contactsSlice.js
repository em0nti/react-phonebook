import { createSlice } from "@reduxjs/toolkit";
import { findContact } from 'utils/utils';
import { nanoid } from 'nanoid';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (findContact(state.items, action.payload.name)) {
          alert(`${action.payload.name} is already in contacts`);
          return;
        }
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
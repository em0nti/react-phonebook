import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchAllThunk } from './actions';

const initialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllThunk.pending, handlePending)
      .addCase(fetchAllThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAllThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});


export const contactsReducer = contactsSlice.reducer;
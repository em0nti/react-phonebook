import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactData, deleteContactData, fetchContactsData } from "utils/api";

export const fetchAllThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await fetchContactsData();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact', async (contactData, thunkAPI) => {
    try {
      return await addContactData(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    return await deleteContactData(contactId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})
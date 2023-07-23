import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactData, deleteContactData, fetchContactsData } from "utils/api";

export const fetchAllThunk = createAsyncThunk(
  'contacts/fetchAll', async () => {
    return await fetchContactsData();
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact', async (contactData) => {
    return await addContactData(contactData);
  }
)

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  return await deleteContactData(contactId);
})
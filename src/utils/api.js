import axios from 'axios'
import {
  INIT_FETCH_CONFIG,
  CONTACTS_URL,
} from 'utils/constants';

const phonebook = axios.create(INIT_FETCH_CONFIG);

export async function fetchContactsData() {
  try {
    const response = await phonebook.get(CONTACTS_URL);
    return response.data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addContactData(contactData) {
  try {
    const response = await phonebook.post(CONTACTS_URL, {
      ...contactData,
      createdAt: Date.now(),
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteContactData(contactId) {
  try {
    const response = await phonebook.delete(`${CONTACTS_URL}/${contactId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

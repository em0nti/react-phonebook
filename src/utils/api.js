import axios from 'axios'
import {
  INIT_FETCH_CONFIG,
  CONTACTS_URL,
} from 'utils/constants';

const phonebook = axios.create(INIT_FETCH_CONFIG);

export async function fetchContactsData() {
  const response = await phonebook.get(CONTACTS_URL);
  return response.data;
}

export async function addContactData(contactData) {
  const response = await phonebook.post(CONTACTS_URL, contactData);
  return response.data;
}

export async function deleteContactData(contactId) {
  const response = await phonebook.delete(`${CONTACTS_URL}/${contactId}`);
  return response.data;
}

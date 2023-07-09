import React, { useState, useEffect } from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import Filter from './Filter';
import { normalize } from 'utils/utils';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  // const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  //Read data from localStorage
  function readContacts() {
    const contacts = localStorage.getItem('contacts');
    try {
      const parsedContacts = JSON.parse(contacts);
      return parsedContacts || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //Save data to localStorage after contacts update
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = normalize(filter);

    return contacts.filter(
      contact =>
        normalize(contact.name).includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <Container className="w-50 p-3">
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 ? (
          <>
            <Filter value={filter} onChange={onFilterChange} />
            <Contacts
              contacts={getFilteredContacts()}
            />
          </>
        ) : (
          <Alert variant="info">Contact list is empty</Alert>
        )}
      </Section>
    </Container>
  );
};

export default App;

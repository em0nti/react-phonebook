import React, { useState, useEffect } from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //Read data from localStorage on mount phase
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    try {
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Save data to localStorage after contacts update
  useEffect(() => {
    if (contacts.length) localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContact = name => {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  const addContact = ({ name, number }) => {
    if (findContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { name, number, id: nanoid() }]);
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <Container className="w-50 p-3">
      <Section title="Phonebook">
        <FormAddContact onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 ? (
          <>
            <Filter value={filter} onChange={onFilterChange} />
            <Contacts contacts={getFilteredContacts()} onDelete={onDelete} />
          </>
        ) : (
          <Alert variant="info">Contact list is empty</Alert>
        )}
      </Section>
    </Container>
  );
};

export default App;

import React from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts.items.length);
  return (
    <Container className="w-50 p-3">
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        {contacts.items.length !== 0 ? (
          <>
            <Filter />
            <Contacts contacts={contacts.items} />
          </>
        ) : (
          <Alert variant="info">Contact list is empty</Alert>
        )}
      </Section>
    </Container>
  );
};

export default App;

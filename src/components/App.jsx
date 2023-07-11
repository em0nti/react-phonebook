import React from 'react';
import FormAddContact from './FormAddContact';
import { Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';

const App = () => {
  return (
    <Container className="w-50 p-3">
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </Container>
  );
};

export default App;

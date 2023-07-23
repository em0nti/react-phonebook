import React, { useEffect } from 'react';
import FormAddContact from './FormAddContact';
import { Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { useDispatch } from 'react-redux';
import { fetchAllThunk } from 'redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllThunk());
  }, [dispatch]);

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

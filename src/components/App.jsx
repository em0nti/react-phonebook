import React, { useEffect } from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllThunk } from 'redux/actions';
import { selectError, selectIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log(error);

  useEffect(() => {
    dispatch(fetchAllThunk());
  }, [dispatch]);

  return (
    <Container className="w-50 p-3">
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        {isLoading && !error && (
          <Alert variant="secondary">Request in progress...</Alert>
        )}
        {error && (
          <Alert variant="danger" onClose={() => dispatch(fetchAllThunk())} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              {error}
            </p>
          </Alert>
        )}
        <Contacts />
      </Section>
    </Container>
  );
};

export default App;

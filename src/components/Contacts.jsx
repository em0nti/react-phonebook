import React from 'react'
import { useSelector } from 'react-redux';
import { selectFilteredItems } from 'redux/selectors';
import { Alert, ListGroup } from 'react-bootstrap';
import Contact from './Contact';
import Filter from './Filter';

const Contacts = () => {
  const contacts = useSelector(selectFilteredItems);
  return (
    <>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ListGroup variant="flush">
            {contacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
          </ListGroup>
        </>
      ) : (
        <Alert variant="info">Contact list is empty</Alert>
      )}
    </>
  );
};

export default Contacts
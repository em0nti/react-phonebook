import React from 'react'
import { Alert, ListGroup } from 'react-bootstrap';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'utils/utils';
import Filter from './Filter';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = getFilteredContacts(contacts.items, filter);
  return (
    <>
      {contacts?.items.length !== 0 ? (
        <>
          <Filter />
          <ListGroup variant="flush">
            {filteredContacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ListGroup>
        </>
      ) : (
        <Alert variant="info">Contact list is empty</Alert>
      )}
    </>
  );
};

export default Contacts
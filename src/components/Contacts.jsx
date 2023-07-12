import React from 'react'
import { Alert, ListGroup } from 'react-bootstrap';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'utils/utils';
import Filter from './Filter';
import { getFilter, getItems } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  return (
    <>
      {contacts.length !== 0 ? (
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
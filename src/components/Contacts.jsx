import React from 'react'
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'utils/utils';

const Contacts = ({ contacts }) => {
  const filter = useSelector(state=>state.filter)
  const filteredContacts = getFilteredContacts(contacts, filter);
  return (
        <ListGroup variant="flush">
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ListGroup>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts
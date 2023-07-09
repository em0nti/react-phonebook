import React from 'react'
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = ({ contacts }) => {
  return (
        <ListGroup variant="flush">
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ListGroup>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts
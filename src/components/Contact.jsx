import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {number}
      </div>
      <CloseButton onClick={() => dispatch(deleteContact(id))} />
    </ListGroup.Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string,
  }),
};

export default Contact;

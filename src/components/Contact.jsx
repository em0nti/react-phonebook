import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/actions';

const Contact = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {phone}
      </div>
      <CloseButton onClick={() => dispatch(deleteContactThunk(id))} />
    </ListGroup.Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string,
  }),
};

export default Contact;

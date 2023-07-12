import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getItems } from 'redux/selectors';
import { findContact } from 'utils/utils';

const FormAddContact = () => {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`No field with name ${name}`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimedName = name.trim();
    if (!trimedName) {
      alert(`Input name`);
      return;
    }
    if (findContact(contacts, trimedName)) {
      alert(`${trimedName} is already in contacts`);
      return;
    }
    dispatch(addContact({ name: trimedName, number: number.trim() }));
    setName('');
    setNumber('');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="border border-primary-subtle p-3 rounded-3"
    >
      <Form.Group className="mb-3" controlId="formAddContactName">
        <Form.Label className="fs-4 fw-medium">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          required
          placeholder="Enter contact name"
          value={name}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAddContactTel">
        <Form.Label className="fs-4 fw-medium">Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          pattern="\+\d{12}"
          required
          placeholder="Enter contact phone number"
          value={number}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          Phone number must be digits and can contain spaces dashes, parentheses
          and can start with +
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default FormAddContact;

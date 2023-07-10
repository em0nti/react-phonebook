import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state=>state.filter)
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <Form.Group className="mb-3" controlId="filter">
      <Form.Label>Filter</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        value= {filter}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default Filter;

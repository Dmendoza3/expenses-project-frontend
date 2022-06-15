import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ExpensesForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

export default function ExpensesForm(){

  return (
    <>
      <div className={styles.ExpensesForm} data-testid="ExpensesForm">
        <Form >
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput1">
            <Form.Label>Expense name:</Form.Label>
            <Form.Control type="text" placeholder="Expense" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput2">
            <Form.Label>Category:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput2">
            <Button>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  )
};

import React, { useEffect, useState }  from 'react';
//import PropTypes from 'prop-types';
//import styles from './ExpensesForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import env from "react-dotenv";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

export default function ExpensesForm(){

  const { register: register1, handleSubmit: handleSubmit1, formState: { errors: error1 }, reset: reset1 } = useForm();

  const onSubmit = data => {
    console.log(data);
    const load = {
      name: data.name,
      category_id: data.category,
      value: data.value
    }

    axios.post(`${env.API_URL}/expenses`, load).then(res =>{
      Swal.fire(
        {
            icon: 'success',
            title: 'Success',
            text: res.data,
        });
      reset1();
    }).catch(err=>{
      Swal.fire(
        {
            icon: 'error',
            title: 'Server error',
            text: 'Internal server error',
        });
    })
  }

  useEffect(() =>{ 
    axios.get(`${env.API_URL}/categories`).then(res =>{
      let data = res.data;
      
      setcategoryList(data)
    }).catch(err=>{
      Swal.fire(
        {
            icon: 'error',
            title: 'Server error',
            text: 'Internal server error',
        });
    })
  }, [] )

  const [categoryList, setcategoryList] = useState([]);

  return (
    <>
      <div className="container mt-4" data-testid="ExpensesForm">
        <Form >
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput1">
            <Form.Label>Expense name:</Form.Label>
            <Form.Control type="text" placeholder="Expense" {...register1("name", { required: true })}/>
            {error1.name && <p className='pl-4 text-danger '>*Name required</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput1">
            <Form.Label>Value:</Form.Label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <Form.Control type="number" placeholder="Price..." min="0" {...register1("value", { required: true })}/>
            </div>
            {error1.value && <p className='pl-4 text-danger '>*Value required</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput2">
            <Form.Label>Category:</Form.Label>
            <Form.Select aria-label="Default select example" {...register1("category", { required: true })}>
              <option value="-1">Select category...</option>
              {categoryList.map((element, index) => {
                return <><option key={index} value={element.id}>{element.name}</option></>
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="expensesForm.ControlInput2">
            <Button onClick={handleSubmit1(onSubmit)}>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  )
};

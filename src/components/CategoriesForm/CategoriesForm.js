import React, { useEffect, useState }  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import env from "react-dotenv";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


export default function CategoriesForm(){
  const { register: register1, handleSubmit: handleSubmit1, formState: { errors: error1 }, reset: reset1 } = useForm();

  const onSubmit = data => {
    const load = {
      name: data.name
    }

    axios.post(`${env.API_URL}/categories`, load).then(res =>{
      Swal.fire(
        {
            icon: 'success',
            title: 'Success',
            text: res.data,
        });
      reset1();
      get_categories();
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
  }, []);

  const get_categories = () => {
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
  }

  const [categoryList, setcategoryList] = useState([]);

  return (
    <>
      <div className="container mt-4" data-testid="CategoriesForm">
        <div className='row'>
          <div className='col-9'>
            <Form >
              <Form.Group className="mb-3" controlId="categoriesForm.ControlInput1">
                <Form.Label>New category name:</Form.Label>
                <Form.Control type="text" placeholder="Name..." {...register1("name", { required: true })}/>
                {error1.name && <p className='pl-4 text-danger '>*Name required</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="categoriesForm.ControlInput2">
                <Button onClick={handleSubmit1(onSubmit)}>Submit</Button>
              </Form.Group>
            </Form>
          </div>

          <div className='col-3'>
            <h5>Categories List</h5>
            <ul>
              {categoryList.map((element, index) => {
                return (<>
                  <li key={index}>{element.name}</li>
                </>)
              })}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

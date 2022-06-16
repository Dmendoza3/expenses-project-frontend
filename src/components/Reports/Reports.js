import React, { useEffect, useState }  from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import env from "react-dotenv";
import Swal from 'sweetalert2';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';


export default function Reports(){
  useEffect(() =>{ 
    get_expenses()
  })

  const get_expenses = () => {
    let date_value = dateValue.toISOString().substring(0, 10);

    axios.get(`${env.API_URL}/expenses?date=${date_value}`).then(res =>{
      let data = res.data;
      
      setExpenseList(data.data);
      setExpenseSumList(data.data_sum);
      
      
      let random_msg = Math.floor(Math.random() * 4)

      let special_msg = [
        "Be careful!",
        "Better check you back account!",
        "Next time try to get a discount!",
        "Stop that."
      ]

      if (data.data_sum.length > 0){
        setMessage("You have been spending too much on " + 
                    data.data_sum[0]["category"] + 
                    " this month." +
                    special_msg[random_msg]);
      }else{
        setMessage("");
      }
    }).catch(err=>{
      Swal.fire(
        {
            icon: 'error',
            title: 'Server error',
            text: 'Internal server error',
        });
    })
  }

  const [expenseList, setExpenseList] = useState([]);
  const [expenseSumList, setExpenseSumList] = useState([]);
  const [dateValue, onDateChange] = useState(new Date());
  const [message, setMessage] = useState('');

  return (
    <>
      <div className="container mt-4" data-testid="Reports">
        <div className='row'>
          <div className='col-12'>
            <h4 className="mb-2">Expenses list</h4>
            <span>Search by date: </span><DatePicker onChange={(date) => {onDateChange(date); get_expenses()}} value={dateValue} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-lg-8'>
            <table className="table" >
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {expenseList.map((element, index)=>{
                  return (
                    <>
                      <tr>
                        <td>{element.name}</td>
                        <td align='justify'>{element.value}</td>
                        <td>{element.registered_date}</td>
                        <td>{element.category}</td>
                      </tr>
                    </>
                  )
                })}
                {expenseList.length === 0 ? <><tr><td colSpan={4}>No data was found on that date...</td></tr></>: <></>}
              </tbody>
            </table>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <table className="table" >
              <thead className="thead-dark">
                <tr>
                  <th>Category</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {expenseSumList.map((element, index)=>{
                  return (
                    <>
                      <tr>
                        <td>{element.category}</td>
                        <td align='justify'>{element.total}</td>
                      </tr>
                    </>
                  )
                })}
                {expenseSumList.length === 0 ? <><tr><td colSpan={2}>No data...</td></tr></>: <></>}
              </tbody>
            </table>
            {message ? <><span style={{color: "red"}}>{message}</span></> : <></>}
          </div>
        </div>
      </div>
    </>
  )
};

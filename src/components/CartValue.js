/*
import React, { useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../context/AppContext';
import { InputNumber, Button, message } from 'antd';
import 'antd/dist/reset.css';

const CartValue = () => {
  const { expenses, Location } = useContext(AppContext);
  const validationSchema = Yup.object().shape({
    numberField: Yup.number()
      .typeError('Please enter a valid number')
      .required('This field is required')
      .max(20000, 'Value must be less than or equal to 20,000')
      .test(
        'is-increment-of-ten',
        'Value must not exceed the upper limit by more than 10',
        (value) => {
          const upperLimit = 20000;
          const margin = 10;
          const diff = value - upperLimit;
          return diff <= margin;
        }
      ),
  });

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 2000);

  return (
    <Formik
      initialValues={{ numberField: totalExpenses }}
      validationSchema={validationSchema}
      
    >
      {(formik) => (
        <div className='alert alert-primary' style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Budget: {Location}</span>
          <InputNumber
            name='numberField'
            value={formik.values.numberField}
            onChange={(value) => formik.setFieldValue('numberField', value)}
            formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            min={0}
            max={20000}
            step={10}
          />
          <ErrorMessage name='numberField' component='div' />
        </div>
      )}
    </Formik>
  );
};

export default CartValue;
*/


import React, { useState, useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../context/AppContext';
import { InputNumber, message } from 'antd';
import 'antd/dist/reset.css';


const { expenses, Location } =(AppContext);
const CartValue = ({ budget, setBudget }) => {
  const handleBudgetChange = (value) => {
    if (value <= 20000) {
      setBudget(value);
    }
  };

  return (
    <div className='alert alert-secondary'>
      <label>Budget: {Location}</label>
      <InputNumber
        min={0}
        max={20000}
        value={budget}
        onChange={handleBudgetChange}
        style={{ marginRight: '0px' }}
      />
    </div>
  );
};

const Balance = ({ budget, expense }) => {
  const remainingBalance = budget - expense;

  return (
    <div>
      <h3>Balance: ${remainingBalance}</h3>
    </div>
  );
};

const Expense = ({ setExpense, remainingBalance }) => {
    const { expense, Location } = useContext(AppContext);
  const handleExpenseChange = (value) => {
    if (value <= remainingBalance) {
      setExpense(value);
    } else {
      message.error("The value can't exceed remaining balance");
    }
  };

  return (
    <div>
      <label>Expense:{Location}</label>
      <InputNumber min={0} value={expense} onChange={handleExpenseChange} />
    </div>
  );
};

const App = () => {
  const [Budget, budget, setBudget] = useState(1000); // Initial budget
  const [expense, setExpense] = useState(0); // Initial expense

  const totalExpenses = expense;

  return (
    <div>
      <Budget budget={budget} setBudget={setBudget} />
      <Balance budget={budget} expense={expense} />
      <Expense expense={expense} setExpense={setExpense} remainingBalance={budget - totalExpenses} />
    </div>
  );
};


export default CartValue;


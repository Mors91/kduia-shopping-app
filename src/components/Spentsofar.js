import React, { useContext } from 'react';
import { InputNumber, message } from 'antd';
import { AppContext } from '../context/AppContext';

/*
const Spentsofar = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 960);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
    );
};
*/


const Expense = ({setExpense, remainingBalance }) => {
    const { expense, Location } = useContext(AppContext);
    const handleExpenseChange = (value) => {
      if (value <= remainingBalance) {
        setExpense(value);
      } else {
        message.error("The value can't exceed remaining balance");
      }
    };
  
    return (
      <div className='alert alert-primary'>
        <label>Spentsofar:{Location}{handleExpenseChange}</label>
        
      </div>
    );
  };

export default Expense;

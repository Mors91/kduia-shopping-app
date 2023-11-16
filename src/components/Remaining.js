import React, { useContext } from 'react';
import { InputNumber, message } from 'antd';
import { AppContext } from '../context/AppContext';

/*
const Remaining = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 1040);

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Location}{totalExpenses}</span>
        </div>
    );
};

*/


const Balance = ({ budget, totalExpenses }) => {
    const { expense, Location } = useContext(AppContext);
    const remainingBalance = totalExpenses - expense;
  
    return (
        <div className='alert alert-success'>
        <span>Remaining: {Location} </span>
    </div>
    );
  };



export default Balance;
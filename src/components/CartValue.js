import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 2000);

    return (
        <div className='alert alert-primary'>
            <span>Budget: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

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

export default Spentsofar;
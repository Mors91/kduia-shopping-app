import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleAddition = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleSubtraction = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>   
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddition} /></td>
        <td><FaMinusCircle size='2.2em' color="orange" onClick={handleSubtraction} /></td>
        <td><FaTimesCircle size='2.2em' color="blue" onClick={handleDeleteItem}></FaTimesCircle></td>
        
        </tr>
    );
};

export default ExpenseItem;

/*
<td>{props.quantity}</td>*/
import React, { useContext } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const validationSchema = Yup.object().shape({
        numberField: Yup.number()
          .typeError('Please enter a valid number')
          .required('This field is required')
      });
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += (item.unitprice * item.quantity));
    }, 2000);
  
    return (
      <Formik
        initialValues={{ numberField: '' }}
        validationSchema={validationSchema}
        //onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <div className='alert alert-primary'>
            <span>Budget: {Location}{totalExpenses}</span>
            <form onSubmit={handleSubmit}>
              <Field type='text' name='numberField' />
              <ErrorMessage name='numberField' component='div' />
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </Formik>
    );
  };

  export default CartValue;
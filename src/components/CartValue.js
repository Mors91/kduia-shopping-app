import React, { useContext, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../context/AppContext';
import { InputNumber, message } from 'antd';
import 'antd/dist/reset.css';

const CartValue = () => {
  const { expenses, Location } = useContext(AppContext);
  const [errorVisible, setErrorVisible] = useState(false);

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
  }, 19999);

  const handleIncrement = (formik) => {
    const currentValue = formik.values.numberField + 10;
    if (currentValue > 20000) {
      setErrorVisible(true);
      message.error('Budget exceeded', 0); // Duration set to 0 to keep the message until user closes it
    } else {
      formik.setFieldValue('numberField', currentValue);
    }
  };

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
            onChange={(value) => {
              if (value <= 20000) {
                formik.setFieldValue('numberField', value);
              } else {
                setErrorVisible(true);
                message.error('Budget reached the upper limit', 0); // Duration set to 0 to keep the message until user closes it
              }
            }}
            formatter={(value) => ` ${value}`}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            min={0}
            max={20000}
            step={10}
            disabled={formik.values.numberField === 20000} // Disable increment button when value is 20000
            onStep={() => handleIncrement(formik)}
          />
          <ErrorMessage name='numberField' component='div' />
          {errorVisible && (
            <div onClick={() => setErrorVisible(false)} style={{ cursor: 'pointer' }}>
              {/* This div just serves as a backdrop for the message */}
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '999' }} />
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default CartValue;

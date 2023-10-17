import React from 'react';
import { Modal, Input, Button } from 'antd';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import cartStore from '@/stores/CartStore';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.string().email('Invalid email').required('Date is required'),
  age: Yup.number().required('Age is required'),
  gender: Yup.string().required('Gender is required'),
  nationality: Yup.string().required('Nationality is required'),
  passport: Yup.string().required('Passport is required'),
});

const UserDetails = ({ visible, onCancel, item }) => {
  const handleSubmit = (values, { resetForm }) => {
    cartStore.addItemToCart(item, values)
    resetForm();
    onCancel();
  };

  return (
    <Modal
      title="Registration Form"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          username: '',
          email: '',
          age: '',
          gender: '',
          nationality: '',
          passport: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        <Form>
          <div>
            <label htmlFor="name">name</label>
            <Field name="name" as={Input} />
            <ErrorMessage name="name" component="div" className="error text-danger"  />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" as={Input} />
            <ErrorMessage name="email" component="div" className="error text-danger" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Field name="age" type="number" as={Input} />
            <ErrorMessage name="age" component="div" className="error text-danger" />
          </div>
          <div>
            <label htmlFor="date">Travel Date</label>
            <Field name="date" type="date" as={Input} />
            <ErrorMessage name="date" component="div" className="error text-danger" />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Field as="select" name="gender">
              <option value="null">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="error text-danger" />
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <Field as="select" name="nationality">
              <option value="none">Select Country</option>
              <option value="in">India</option>
              <option value="us">USA</option>
              <option value="uk">UK</option>
            </Field>
            <ErrorMessage name="nationality" component="div" className="error text-danger"  />
          </div>
          <div>
            <label htmlFor="passport">Passport no.</label>
            <Field name="passport" type="text" as={Input} />
            <ErrorMessage name="passport" component="div" className="error text-danger" />
          </div>

          <div>
            <Button type="primary" htmlType="submit">
              Book Your Ticket
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default UserDetails;

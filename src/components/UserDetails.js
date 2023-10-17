// components/UserDetails.js
import React from 'react';
import { Modal,  Input, Button } from 'antd';
import { Formik, Field, Form, } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const UserDetails = ({ visible, onCancel }) => {
  const handleSubmit = (values, { resetForm }) => {

    console.log('Submitted data:', values);
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
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" as={Input} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" as={Input} />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Field name="age" type="number" as={Input} />
          </div>
          <div>
          <Field as="select" name="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option>
           </Field>
           <Field as="select" name="nationality" >
             <option value="in">India</option>
             <option value="us">USA</option>
             <option value="uk">UK</option>
           </Field>
          </div>
          <div>
            <label htmlFor="passport">Passport no.</label>
            <Field name="passport" type="text" as={Input} />
          </div>
          
          <div>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default UserDetails;

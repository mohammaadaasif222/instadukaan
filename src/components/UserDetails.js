import React from "react";
import { Modal, Input, Button } from "antd";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";

import * as Yup from "yup";

import cartStore from "@/stores/CartStore";

const validationSchema = Yup.object().shape({
  passengers: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      age: Yup.number().required("Age is required"),
      date: Yup.string().required("Date is required"),
      gender: Yup.string().required("Gender is required"),
      nationality: Yup.string().required("Nationality is required"),
      passport: Yup.string().required("Passport is required"),
    })
  ),
});

const UserDetails = ({ visible, onCancel, item }) => {
  const handleSubmit = (values, { resetForm }) => {
    cartStore.addItemToCart(item, values.passengers);
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
          passengers: [
            {
              name: "",
              email: "",
              age: "",
              gender: "",
              nationality: "",
              passport: "",
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="passengers"
              render={({ push, remove }) => (
                <div>
                  {values.passengers.map((passenger, index) => (
                    <div key={index}>
                      <div>
                        <label htmlFor={`passengers[${index}].name`}>
                          Name
                        </label>
                        <Field
                          id={`passengers[${index}].name`}
                          name={`passengers[${index}].name`}
                          as={Input}
                        />
                        <ErrorMessage
                          name={`passengers[${index}].name`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div>
                        <label htmlFor={`passengers[${index}].email`}>
                          Email
                        </label>
                        <Field
                          id={`passengers[${index}].email`}
                          name={`passengers[${index}].email`}
                          type="email"
                          as={Input}
                        />
                        <ErrorMessage
                          name={`passengers[${index}].email`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div>
                        <label htmlFor={`passengers[${index}].age`}>Age</label>
                        <Field
                          id={`passengers[${index}].age`}
                          name={`passengers[${index}].age`}
                          type="number"
                          as={Input}
                        />
                        <ErrorMessage
                          name={`passengers[${index}].age`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div>
                        <label htmlFor={`passengers[${index}].date`}>
                          Travel Date
                        </label>
                        <Field
                          id={`passengers[${index}].date`}
                          name={`passengers[${index}].date`}
                          type="date"
                          as={Input}
                        />
                        <ErrorMessage
                          name={`passengers[${index}].date`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div>
                        <label htmlFor={`passengers[${index}].gender`}>
                          Gender
                        </label>
                        <Field
                          as="select"
                          id={`passengers[${index}].gender`}
                          name={`passengers[${index}].gender`}
                        >
                          <option value="null">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage
                          name={`passengers[${index}].gender`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div>
                        <label htmlFor={`passengers[${index}].nationality`}>
                          Nationality
                        </label>
                        <Field
                          as="select"
                          id={`passengers[${index}].nationality`}
                          name={`passengers[${index}].nationality`}
                        >
                          <option value="none">Select Country</option>
                          <option value="in">India</option>
                          <option value="us">USA</option>
                          <option value="uk">UK</option>
                        </Field>
                        <ErrorMessage
                          name={`passengers[${index}].nationality`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div>
                        <label htmlFor={`passengers[${index}].passport`}>
                          Passport no.
                        </label>
                        <Field
                          id={`passengers[${index}].passport`}
                          name={`passengers[${index}].passport`}
                          type="text"
                          as={Input}
                        />
                        <ErrorMessage
                          name={`passengers[${index}].passport`}
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      {values.passengers.length > 1 && (
                        <DeleteOutlined
                        style={{color:'red', padding:'1rem 0rem'}}
                        title="Delete Form"
                          key="delete"
                          onClick={() => remove(index)}
                        />
                      )}
                    </div>
                  ))}
                  <PlusCircleOutlined
                  style={{padding:'1rem 0rem'}}
                    key="add"
                    onClick={() =>
                      push({
                        name: "",
                        email: "",
                        age: "",
                        date: "",
                        gender: "",
                        nationality: "",
                        passport: "",
                      })
                    }
                    title="Add Form"
                  />
                </div>
              )}
            />
            <div>
              <Button type="primary" htmlType="submit">
                Book Your Ticket
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UserDetails;

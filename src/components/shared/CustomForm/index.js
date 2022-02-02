import React from 'react';
import { Form, Formik } from 'formik';
import _ from 'lodash';
import { formSchema } from '../../formSchema';
import { getFormField, getFormInitialValues } from '../../../utils/formUtils';

const FormBuilder = ({ schema }) => {
  return schema.map((item) => getFormField(item));
};

export default function CustomForm() {
  
  return (
    <Formik initialValues={() => getFormInitialValues(formSchema)}>
      {(formik) => (
        <div className="h1">
          <Form>
            <FormBuilder schema={_.values(formSchema)} />
          </Form>
        </div>
      )}
    </Formik>
  );
}

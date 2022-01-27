import React from 'react';
import { TextInput, Button } from '@mantine/core';
import { Formik } from 'formik';
import * as Yup from 'yup';

function ContributeForm(props) {

  const contributeSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Tên gì ngắn vậy!').max(50, 'Tên gì dài quá vậy!').required('Tên bạn là gì nè.'),
    question: Yup.string().required('Bạn quên nhập câu hỏi rồi nè.')
  });

  const handleSubmitForm = (values) => {
    console.log(values);
  }

  return (
  <>
    <Formik
      initialValues={{name: '', question: ''}}
      validationSchema={contributeSchema}
      onSubmit={handleSubmitForm}
    >
     {({values, handleChange, handleSubmit, errors}) => (
        <form onSubmit={handleSubmit}>
          <TextInput
            value={values.name}
            onChange={handleChange}
            description="Ví dụ: Nguyen Van A"
            label="Tên của bạn"
            name='name'
            variant="filled"
            id="name"
            radius="md"
            size="md"
            error={errors.name || null}
            required />
          <TextInput
            value={values.question}
            onChange={handleChange}
            name="question"
            id="question"
            variant="filled"
            description="Ví dụ: Tai sao yeu?"
            label="Câu hỏi"
            radius="md"
            size="md" 
            error={errors.question || null}
            required/>
        <Button type="submit">Gửi</Button>
      </form>
     )}
    </Formik>
  </>
  );
}

export default ContributeForm;
import React from 'react';
import { TextInput, Button, NumberInput } from '@mantine/core';
import { Formik } from 'formik';
import useHttp from '../../../store/hooks/useHttp';
import * as Yup from 'yup';
import { API_KEY } from '../../../store/constant';

function ContributeForm(props) {
  const [sendRequest, data] = useHttp(`${API_KEY}/questions.json`);

  const contributeSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Tên gì ngắn vậy!').max(50, 'Tên gì dài quá vậy!').required('Tên bạn là gì nè.'),
    question: Yup.string().required('Bạn quên nhập câu hỏi rồi nè.'),
    timeLimit: Yup.number().moreThan(5, 'Thời gian ít vậy!').positive().integer().required('')
  });

  const handleSubmitForm = async (values) => {
    const newQuestion = {
      content: values.question,
      id: Date.now(),
      author: values.name,
      timeLimit: values.timeLimit
    }

    await sendRequest('POST', newQuestion);
  }

  return (
  <>
    <Formik
      initialValues={{name: '', question: '', timeLimit: 30}}
      validationSchema={contributeSchema}
      onSubmit={handleSubmitForm}
    >
     {({values, handleChange, handleSubmit, touched, errors}) => (
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
            error={(errors.name && touched.name) ? errors.name : null}
            style={{margin: '15px 0'}}
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
            error={(errors.question && touched.question) ? errors.question : null}
            style={{margin: '15px 0'}}
            required/>
          <NumberInput
            value={values.timeLimit}
            onChange={handleChange}
            description="Giới hạn thời gian của câu hỏi"
            placeholder="Giới hạn thời gian của câu hỏi"
            label="Thời gian"
            name="timeLimit"
            id="timeLimit"
            style={{margin: '15px 0'}}
            required
          />
        <Button type="submit" style={{margin: '10px 0'}}>Gửi</Button>
      </form>
     )}
    </Formik>
  </>
  );
}

export default ContributeForm;
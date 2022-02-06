import React, { useEffect } from 'react';
import { Accordion, TextInput } from '@mantine/core';
import useHttp from '../../../store/hooks/useHttp';
import { API_KEY } from '../../../store/constant';

function QuestionsContributed(props) {
  const [sendRequest, data, status] = useHttp(`${API_KEY}/questions.json`);
  console.log(status);
  useEffect(()=> {
    sendRequest('GET');
  }, [])

  return (
    <>
          {
            data?.map((qs, index) => (
              <TextInput
                key={index}
                style={{margin: '15px 0'}}
                size="lg"
                radius="md"
                value={qs.content}
                variant="filled"
              />))
          }
    </>
  );
}

export default QuestionsContributed;
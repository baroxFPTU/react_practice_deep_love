import React, { useEffect } from 'react';
import { Accordion, TextInput } from '@mantine/core';
import useHttp from '../../../store/hooks/useHttp';
import { API_KEY } from '../../../store/constant';

function QuestionsContributed(props) {
  const [sendRequest, data] = useHttp(`${API_KEY}/questions.json`);

  useEffect(()=> {
    sendRequest('GET');
  }, [])

  return (
    <>
      <Accordion iconPosition="right">
        <Accordion.Item label="Danh sách câu hỏi">
          {
            data?.map(qs => (<TextInput style={{margin: '15px 0'}} size="lg"  radius="md" fluid={true} value={qs.content} variant="filled"/>))
          }
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default QuestionsContributed;
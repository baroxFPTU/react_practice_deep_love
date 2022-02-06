import React from 'react';
import { Container, Title, Accordion } from '@mantine/core';
import ContributeForm from '../components/Contribute/Form';
import QuestionsContributed from '../components/Contribute/ListQuestion';

function Contribute(props) {
  return (
  <>
    <Container style={{margin: '5rem auto', width: '800px'}} padding={15} fluid={true}>
    <Title order={1}>This is h1 title</Title>
      <ContributeForm/>
      <Accordion iconPosition="right">
        <Accordion.Item label="Danh sách câu hỏi">
          <QuestionsContributed/>
        </Accordion.Item>
      </Accordion>
    </Container>
  </>
  );
}

export default Contribute;
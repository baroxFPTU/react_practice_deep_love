import React from 'react';
import { Container, Title } from '@mantine/core';
import ContributeForm from '../components/Contribute/Form';
import QuestionsContributed from '../components/Contribute/ListQuestion';

function Contribute(props) {
  return (
  <>
    <Container style={{margin: '5rem auto', width: '1000px'}} padding={15} fluid={true}>
    <Title order={1}>This is h1 title</Title>
      <ContributeForm/>
      <QuestionsContributed/>
    </Container>
  </>
  );
}

export default Contribute;
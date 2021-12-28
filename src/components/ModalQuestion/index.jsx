import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import classes from './ModalQuestion.module.css';

ModalQuestion.propTypes = {
  question: PropTypes.string
};

ModalQuestion.defaultProps = {
  question: null
}

function randomQuestion(questions) {
 const randomIndex = Math.floor(Math.random() * (questions.length - 1)  + 1);
 const _randomQuestion = questions[randomIndex];
 const filteredQuestions = questions.filter(question => question.id !== _randomQuestion.id )

 return [_randomQuestion, filteredQuestions];
}

function ModalQuestion({questions, onUpdateQuestions, playerTurn}) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const [question, filteredQuestions] = randomQuestion(questions);
    setQuestion(question);
    onUpdateQuestions(filteredQuestions);
    return () => {
      setQuestion(null)
    }
  }, [])

  return (
    <div className={classes.modalQuestion} data-player-turn={playerTurn}>
      <div className="icon"></div>
      {question ? (<h3>Câu hỏi: {question.content}</h3> ): 'Đã hết câu hỏi'}
    </div>
  );
}

export default ModalQuestion;
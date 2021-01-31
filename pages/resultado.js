/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import Header from 'next/head';
import { Widget, WrapperResult } from '../components/Widget/styles';
import Layout from '../layouts';
import { usePlayerInfo } from '../contexts/PlayerData';
import { motion } from 'framer-motion';
import db from '../db.json'

const rightAnswerIcon = '/img/check-circle.svg';
const wrongAnswerIcon = '/img/wrong-circle.svg';

export const Resultado = () => {
  const [numeroTotalPerguntas] = useState(db.questions.length);
  const { nome, result } = usePlayerInfo();
  const handleNumberOfQuestionsRight = () => result.filter((ele) => ele === true).length;

  const handleResultMessage = (numberOfRightAnswers) => {
    switch (true) {
      case numberOfRightAnswers < 4: return (
        <>
          Feels bad man, você acertou
          {' '}
          {numberOfRightAnswers}
          {' '}
          {numberOfRightAnswers == 1 || numberOfRightAnswers == 0 ? <>questão</> : <>questões</>}
        </>
      );
      case numberOfRightAnswers < 8: return (
        <>
          It's ok bro, você acertou
          {' '}
          {numberOfRightAnswers}
          {' '}
          questões
        </>
      );
      case numberOfRightAnswers < 11: return (
        <>
          Você é o lorde dos memes, você acertou
          {' '}
          {numberOfRightAnswers}
          {' '}
          questões
        </>
      );
      default: <>Deu ruim na hora de imprimir o resultado</>;
    }
  };

  return (
    <>
      <Header>
        <title>
          Você acertou
          {' '}
          {handleNumberOfQuestionsRight()}
          {' '}
          questões
        </title>
      </Header>
      <Layout>
        <Widget>
          <Widget.Header>
            Resultado de
            {' '}
            { nome || 'Anônimo'}
          </Widget.Header>
          <Widget.Content>
            {handleResultMessage(handleNumberOfQuestionsRight())}
          </Widget.Content>
        </Widget>
        <WrapperResult.Content>
            {Array.from(Array(numeroTotalPerguntas), (e, i) => (
              <div style={{display: 'flex'}}>
              <p>{i+1}:</p>
              <Widget.Result
                as={motion.div}
                animate={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                key={i}
                backgroundImage={result[i] === true ? rightAnswerIcon
                  : result[i] === false ? wrongAnswerIcon : ''}
              />
              </div>
            ))}
          </WrapperResult.Content>
      </Layout>
    </>
  );
};

export default Resultado;

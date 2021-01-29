/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import { Widget } from '../components/Widget/styles';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import Layout from '../layouts';
import { usePlayerInfo } from '../contexts/PlayerData';

export const Resultado = () => {
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
          {numberOfRightAnswers == 1 || numberOfRightAnswers == 0 ? 'questão' : 'questões'}
          `
        </>
      );
      case numberOfRightAnswers < 8: return (
        <>
          It's ok bro, você acertou
          {' '}
          {numberOfRightAnswers}
        </>
      );
      case numberOfRightAnswers < 11: return (
        <>
          Você é o lorde dos memes, você acertou
          {' '}
          {numberOfRightAnswers}
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
      </Layout>
    </>
  );
};

export default Resultado;

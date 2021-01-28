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
  return (
    <>
      <Header>
        <title>
          Você acertou 
          {handleNumberOfQuestionsRight()}
          {' '}
          questões
        </title>
      </Header>
      <Layout>
        <Widget>
          <Widget.Header>
            Resultado
          </Widget.Header>
          <Widget.Content>
            Que daora
            {' '}
            {nome || 'Anônimo'}
            {' '}
            você acertou
            {' '}
            {handleNumberOfQuestionsRight()}
            {' '}
            questões!
          </Widget.Content>
        </Widget>
      </Layout>
    </>
  );
};

export default Resultado;

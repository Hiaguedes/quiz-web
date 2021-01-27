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

const { theme } = db;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Perguntas() {
  const [numeroPergunta, setaNumeroPergunta] = useState(0);
  const [numeroResposta, setaNumeroResposta] = useState(-1);
  const [numeroTotalPerguntas] = useState(db.questions.length);
  const { setQuizResult } = usePlayerInfo();
  const router = useRouter();

  const handleClick = (index) => {
    setaNumeroResposta(index);
  };

  const handleSendAnswer = () => {
    setQuizResult(numeroResposta === db.questions[numeroPergunta].answer, numeroPergunta);
    setaNumeroResposta(-1);
    if (numeroTotalPerguntas === numeroPergunta + 1) {
      router.push('/resultado');
      return;
    }

    setaNumeroPergunta(numeroPergunta + 1);
  };

  useEffect(() => {
  });
  return (
    <>
      <Header>
        <title>
          Pergunta
          {' '}
          {numeroPergunta + 1}
          {' '}
          de
          {' '}
          {numeroTotalPerguntas}
        </title>
      </Header>
      <Layout>

        <Widget>
          <Widget.Header>
            Pergunta
            {' '}
            {numeroPergunta + 1}
            {' '}
            de
            {' '}
            {numeroTotalPerguntas}
          </Widget.Header>
          <Widget.Image backgroundImage={db.questions[numeroPergunta].image} />
          <Widget.Content>
            <h2 style={{ fontSize: '14px' }}>{db.questions[numeroPergunta].title}</h2>
            <p>
              {db.questions[numeroPergunta].description}
            </p>
            {numeroPergunta === 0 && (
              <audio rel="preload" controls>
                <source volume="0.4" src="/sounds/audio-question1.ogg" type="audio/mpeg" />
              </audio>
            )}
            {db
              .questions[numeroPergunta]
              .alternatives
              // eslint-disable-next-line react/no-array-index-key
              .map((alternative, index) => (
                <Widget.Link
                  type="option"
                  onClick={() => handleClick(index)}
                  key={index}
                  clicked={numeroResposta === index}
                >
                  {alternative}
                </Widget.Link>
              ))}
            <Button disabled={numeroResposta === -1} onClick={handleSendAnswer}>Confirmar</Button>
          </Widget.Content>
        </Widget>
      </Layout>
    </>
  );
}

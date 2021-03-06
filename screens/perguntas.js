/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from 'next/head';
import { useRouter } from 'next/router';
// import db from '../db.json';
import { Widget, WrapperResult } from '../components/Widget/styles';
import Layout from '../layouts';
import { usePlayerInfo } from '../contexts/PlayerData';
import Loading from '../components/Loading';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

const rightAnswerIcon = '/img/check-circle.svg';
const wrongAnswerIcon = '/img/wrong-circle.svg';
const timeBetweenScreens = 2000;

// const { theme } = db;

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

export default function Perguntas({ api }) {
  const db = api;
  const [numeroPergunta, setaNumeroPergunta] = useState(0);
  const [numeroResposta, setaNumeroResposta] = useState(-1);
  const [numeroTotalPerguntas] = useState(db.questions.length);
  const [mensagemResultado, setMensagemResultado] = useState(<>Resultado</>);
  const { setQuizResult, result } = usePlayerInfo();
  const router = useRouter();

  const handleClick = (index) => {
    setaNumeroResposta(index);
  };

  const handleSendAnswer = () => {
    try {
      setQuizResult(numeroResposta === db.questions[numeroPergunta].answer, numeroPergunta);
      setaNumeroResposta(-1);

      numeroResposta === db.questions[numeroPergunta].answer
        ? setMensagemResultado(<p style={{ color: '#4CAF50', fontSize:'18px' }}>Você acertou!</p>)
        : setMensagemResultado(<p style={{ color: '#FF5722', fontSize:'18px' }}>Você errou!</p>);
      setTimeout(() => {
        setMensagemResultado(<>Resultado</>);
        setaNumeroPergunta(numeroPergunta + 1);
      }, timeBetweenScreens);
    } catch (e) {
      console.log(e);
    } finally {
      if (numeroTotalPerguntas === numeroPergunta + 1) {
        router.push('/resultado');
      }
    }
  };

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
      <Layout style={{ position: 'relative' }}>

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
            {db.questions[numeroPergunta].audio && (
              <>
                <p>Um audio pode ser escutado aqui</p>
                <audio rel="preload" controls>
                  <source volume="0.4" src={db.questions[numeroPergunta].audio} type="audio/mpeg" />
                </audio>
              </>
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
              || <Loading />))}
            <Button disabled={numeroResposta === -1} onClick={handleSendAnswer}>Confirmar</Button>
          </Widget.Content>
        </Widget>
        <WrapperResult>
          <Widget.Header>
            {mensagemResultado}
          </Widget.Header>
          <WrapperResult.Content>
            {Array.from(Array(numeroTotalPerguntas), (e, i) => (
              <Widget.Result
                as={motion.div}
                animate={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                key={i}
                backgroundImage={result[i] === true ? rightAnswerIcon
                  : result[i] === false ? wrongAnswerIcon : ''}
              />
            ))}
          </WrapperResult.Content>
        </WrapperResult>
      </Layout>
    </>
  );
}

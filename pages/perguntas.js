import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from 'next/head';
import db from '../db.json';
import { Widget } from '../components/Widget/styles';
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import Layout from '../layouts'

const theme = db.theme;

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

export default function Home() {
  const [numeroPergunta, setaNumeroPergunta] = useState(0);
  useEffect(() => {

  })
  return (
    <>
    <Header>
      <title>Pergunta {numeroPergunta + 1} de 5</title>
    </Header>
    <Layout>

        <Widget>
        <Widget.Header>
                Pergunta {numeroPergunta + 1} de 5
          </Widget.Header>
        <Widget.Image backgroundImage={db.questions[numeroPergunta].image} />
        <Widget.Content>
            <h2 style={{fontSize: '14px'}}>{db.questions[numeroPergunta].title}</h2>
            <p>{db.questions[numeroPergunta].description}</p>
            {numeroPergunta === 0 && (
            <audio rel="preload" controls>
                <source volume="0.4" src="/sounds/audio-question1.ogg" type="audio/mpeg"/>
            </audio>            
            )}
            {db
            .questions[numeroPergunta]
            .alternatives
            .map((alternative,index) => {
                return (<Widget.Link key={index}>{alternative}</Widget.Link>)
            })}
            <Button>Confirmar</Button>
        </Widget.Content>
        </Widget>
        </Layout>
        <script>
            audio.volume = 0.5;
        </script>
    </>
  )
}
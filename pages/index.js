import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from 'next/head';
import Image from 'next/image';
import db from '../db.json';
import { Widget } from '../components/Widget/styles';
import Footer from '../components/Footer';
import { QuizBackground } from '../components/QuizBackground';
import GitHubCorner from '../components/GithubCorner';
import { Input } from '../components/Input'
import { Button } from '../components/Button'

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
  const [nameValue, setNameValue] = useState('');
  useEffect(() => {

  })
  return (
    <>
    <Header>
      <title>Home</title>
    </Header>
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl="https://github.com/Hiaguedes/imersao-react-nextjs-alura"/>
      <QuizContainer>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Image src="/img/logoAlura.svg" width="134.37px" height="67px"/>
      </div>

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <p>{db.description}</p>
          <Input placeholder="Diz aí seu nome pra jogar :)" value={nameValue} onChange={e => setNameValue(e.target.value)}/>
          <Button>
            Jogar
          </Button>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p style={{fontWeight: 700, fontSize: '16px'}}>Quizes da rapeize</p>
            <p>Se liga nesses quizes incríveis que o pessoal da Imersão Alura fez</p>
            <Widget.Link href="#">marquinhosdj/fazosampledeguitarra</Widget.Link>
            <Widget.Link href="#">grupoyno/meensinaofeitiodafelicidade</Widget.Link>
            <Widget.Link href="#">dogofwisdom/everyonelikesme</Widget.Link>
          </Widget.Content>
        </Widget>
      <Footer />
      </QuizContainer>
    </QuizBackground>
    </>
  )
}

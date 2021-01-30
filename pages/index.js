/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

export default function Home() {
  const [nameValue, setNameValue] = useState('');
  const router = useRouter();
  const { setPlayerNome } = usePlayerInfo();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerNome(nameValue);
    router.push('/perguntas');
  };

  useEffect(() => {

  });
  return (
    <>
      <Header>
        <title>Home</title>
      </Header>
      <Layout>
        <>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <Input required placeholder="Diz aí seu nome pra jogar :)" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
                <Button disabled={nameValue.length === 0}>
                  Jogar
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <p style={{ fontWeight: 700, fontSize: '16px' }}>Quizes da rapeize</p>
              <p>Se liga nesses quizes incríveis que o pessoal da Imersão Alura fez</p>
              {db.external.map((link) => {
                const [nomeProjeto, autor] = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                return (
                  <Link href={`/perguntas/${nomeProjeto}___${autor}`} passHref>
                    <a style={{textDecoration: 'none'}}>
                      <Widget.Link>{`${autor.charAt(0).toUpperCase() + autor.slice(1)}/${nomeProjeto}`}</Widget.Link>
                    </a>
                  </Link>
                );
              })}
            </Widget.Content>
          </Widget>
        </>
      </Layout>
    </>
  );
}

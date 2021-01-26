import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import db from '../db.json';
import Footer from '../components/Footer';
import { QuizBackground } from '../components/QuizBackground';
import GitHubCorner from '../components/GithubCorner';

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

export default function Layout({ children }) {
  useEffect(() => {

  });
  return (
    <>

      <QuizBackground backgroundImage={db.bg}>
        <GitHubCorner projectUrl="https://github.com/Hiaguedes/imersao-react-nextjs-alura" />
        <QuizContainer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image src="/img/logoAlura.svg" width="134.37px" height="67px" />
          </div>

          {children}
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}

import styled from 'styled-components';
import db from '../db.json';
import { Widget } from '../components/Widget/styles';
import Footer from '../components/Footer';
import { QuizBackground } from '../components/QuizBackground';
import GitHubCorner from '../components/GitHubCorner';

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl="https://github.com/Hiaguedes/imersao-react-nextjs-alura"/>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>eae</h1>
          </Widget.Header>
          <Widget.Content>
            <p>desc</p>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
            <p>Título desc</p>
          </Widget.Content>
          <Widget.Content>
            <p>desc</p>
          </Widget.Content>
        </Widget>
      <Footer />
      </QuizContainer>
    </QuizBackground>
  )
}

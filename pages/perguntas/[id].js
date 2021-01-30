import Perguntas from '../../screens/perguntas';
import { ThemeProvider } from 'styled-components';

export default function QuizPages({ dbExterno }) {
  const { theme } = dbExterno;
  return (
    <>
    <ThemeProvider theme={theme}>
      <Perguntas api={dbExterno} />
    </ThemeProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log('infos vindos do next', context);
  const [nomeProjeto, autor] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${nomeProjeto}.${autor}.vercel.app/api/db`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Falha ao pegar os dados');
    })
    .then((resJSON) => resJSON)
    .catch((err) => console.error(err));

  return {
    props: { dbExterno }, // will be passed to the page component as props
  };
}

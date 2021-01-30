export default function QuizPages(props) {
  return (
    <pre style={{ color: 'black' }}>
      {JSON.stringify(props, null, 4)}
    </pre>
  );
}

export async function getServerSideProps(context) {
  console.log('infos vindos do next', context);

  const dbExterno = await fetch('https://quiz-web.hiaguedes.vercel.app/api/db')
    .then((res) => {
      if (res.ok){
        return res.json();
      };
      throw new Error('Falha ao pegar os dados');
    })
    .then((resJSON) => resJSON)
    .catch((err) => console.error(err));

  return {
    props: { dbExterno }, // will be passed to the page component as props
  };
}

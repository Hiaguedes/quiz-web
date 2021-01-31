/* eslint-disable react/no-array-index-key */
import db from '../../db.json';
import Perguntas from '../../screens/perguntas';


export default function PerguntasPage() {
  return <Perguntas api={db}/>
}

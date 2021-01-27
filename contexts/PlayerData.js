import { useContext, createContext, useState } from 'react';
import db from '../db.json';

const numeroQuestoes = db.questions.length;

const ctxDefaultValue = {
  nome: '',
  result: [],
  setPlayerNome: (name) => {},
  setQuizResult: (boolean, index) => {},
};
const PlayerInfoContext = createContext(ctxDefaultValue);

export const PlayerInfoProvider = ({ children }) => {
  const [nome, setNome] = useState(ctxDefaultValue.nome);
  const [result, setResult] = useState(ctxDefaultValue.result);

  const setPlayerNome = (nome) => {
    setNome(nome);
  };

  const setQuizResult = (boolean, index) => {
    const newArray = [...result];
    newArray[index] = boolean;
    setResult(newArray);
  }

  return (
    <PlayerInfoContext.Provider value={{ nome, setPlayerNome, result, setQuizResult }}>
      {children}
    </PlayerInfoContext.Provider>
  );
};

export const usePlayerInfo = () => useContext(PlayerInfoContext);

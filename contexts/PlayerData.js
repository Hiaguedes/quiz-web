import { useContext, createContext, useState } from 'react';

const ctxDefaultValue = {
  nome: '',
  alternativa1: '',
  setPlayerNome: (name) => {},
};
const PlayerInfoContext = createContext(ctxDefaultValue);

export const PlayerInfoProvider = ({ children }) => {
  const [nome, setNome] = useState(ctxDefaultValue.nome);

  const setPlayerNome = (nome) => {
    setNome(nome);
  };

  return (
    <PlayerInfoContext.Provider value={{ nome, setPlayerNome }}>
      {children}
    </PlayerInfoContext.Provider>
  );
};

export const usePlayerInfo = () => useContext(PlayerInfoContext);

import React from 'react';
import { HeartSpinner } from 'react-spinners-kit';

const Loading = () => (
  <div style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <HeartSpinner size={30} color="#29b6f6" loading />
    <p>Carregando Informações</p>
  </div>
);

export default Loading;

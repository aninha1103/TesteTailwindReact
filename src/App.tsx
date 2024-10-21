import React from 'react';
import Tabela from './tabela';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Detalhamento de erros</h1>
      <Tabela />
    </div>
  );
}

export default App;


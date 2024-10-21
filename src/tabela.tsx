import React, { useEffect, useState } from 'react';

interface User {
  Horário: string;
  Erro: number;
  Detalhamento: string;
}

const Tabela: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise<User[]>((resolve) => 
          setTimeout(() => resolve([
            { Horário: '15:00', Erro: 504, Detalhamento: 'Getaway Timeout' },
            { Horário: '14:52', Erro: 400, Detalhamento: 'Bad Request' },
            { Horário: '14:34', Erro: 404, Detalhamento: 'Not Found' },
          ]), 1000)
        );
        setData(response);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-indigo-950 text-white font-bold">
            <th colSpan={3} className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
              Detalhamento de Erros
            </th>
          </tr>
          <tr className="bg-indigo-800 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Horário</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Erro</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Detalhamento</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {data.map((user) => (
            <tr key={user.Horário} className="hover:bg-gray-700 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-gray-300">{user.Horário}</td>   {/* Cor da coluna Horário */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black bg-gray-100 font-bold">{user.Erro}</td>      {/* Cor da coluna Erro */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700  bg-gray-100">{user.Detalhamento}</td> {/* Cor da coluna Detalhamento */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
};

export default Tabela;

import React, { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom';  
import '../styles/LaunchSearch.css';  

// estrutura com os campos que precisamos
interface Launch {
  id: string;           
  name: string;        
  date_utc: string;     
}

const LaunchSearch: React.FC = () => {  
  const [launches, setLaunches] = useState<Launch[]>([]);  //Um array de lançamentos, inicialmente vazio
  const [searchTerm, setSearchTerm] = useState('');  //uma string vazia, vai ser usado para armazenar o termo de pesquisa

  // Função para buscar todos os lançamentos da API
  const fetchBuscarLançamentos = async () => {
    try {
      // Faz um GET para buscar todos os lançamentos
      const response = await fetch('https://api.spacexdata.com/v4/launches');
      // Converte para JSON
      const data = await response.json();
      // Passa os dados
      setLaunches(data);
    } catch (error) {
      console.error('Erro ao buscar lançamentos:', error);
    }
  };

  // é executado uma vez quando o componente é montado (a lista de lançamentos será carregada ao inicializar o componente)
  useEffect(() => {
    fetchBuscarLançamentos();  // Chama a função para carregar os lançamentos
  }, []);  // O array vazio significa que o efeito é executado apenas uma vez, quando o componente é montado

  // Filtra os lançamentos com base no termo de pesquisa
  const filteredLaunches = launches.filter(launch =>
    launch.name.toLowerCase().includes(searchTerm.toLowerCase())  // Verifica se o nome do lançamento contém o termo de pesquisa
  );

  return (
    <div className="launch-search-container">  
      <h1 className="title">SpaceX Explorer</h1>  
      <div className="search-bar">  
        <input
          type="text"  
          placeholder="Qual lançamento deseja?"  
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)}  
        />
      </div>
      <div className="launch-list">  
        {filteredLaunches.length > 0 ? (  // Se houver lançamentos filtrados, renderiza a lista de lançamentos
          filteredLaunches.map(launch => (  // Itera sobre os lançamentos filtrados e cria um Link para cada um
            <Link key={launch.id} to={`/launch/${launch.id}`} className="launch-item">  
              <h3>{launch.name}</h3>  
              <p>{new Date(launch.date_utc).toLocaleDateString()}</p>  
            </Link>
          ))
        ) : (  // Caso não existam lançamentos filtrados
          <p>Não existe nenhum lançamento com este nome!</p>
        )}
      </div>
    </div>
  );
};

export default LaunchSearch;  

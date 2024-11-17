import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LaunchSearch.css';

interface Launch {
  id: string;
  name: string;
  date_utc: string;
}

const LaunchSearch: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Busca os lançamentos da API
  const fetchLaunches = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches');
      const data = await response.json();
      setLaunches(data);
    } catch (error) {
      console.error('Erro ao buscar lançamentos:', error);
    }
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  // Filtra os lançamentos com base no termo de pesquisa
  const filteredLaunches = launches.filter(launch =>
    launch.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredLaunches.length > 0 ? (
          filteredLaunches.map(launch => (
            <Link key={launch.id} to={`/launch/${launch.id}`} className="launch-item">
              <h3>{launch.name}</h3>
              <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
            </Link>
          ))
        ) : (
          <p>Não existe nenhum lançamento com este nome!</p>
        )}
      </div>
    </div>
  );
};

export default LaunchSearch;

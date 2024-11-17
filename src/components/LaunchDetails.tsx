import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/LaunchDetails.css';

interface Launch {
  name: string;
  date_utc: string;
  details: string;
  rocket: string;
}

const LaunchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [launch, setLaunch] = useState<Launch | null>(null);

  // Busca os detalhes do lançamento da API
  const fetchLaunchDetail = async () => {
    try {
      const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
      const data = await response.json();
      setLaunch(data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do lançamento:', error);
    }
  };

  useEffect(() => {
    fetchLaunchDetail();
  }, [id]);

  if (!launch) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="launch-detail-container">
      <h1>{launch.name}</h1>
      <p><strong>Data:</strong> {new Date(launch.date_utc).toLocaleString()}</p>
      <p><strong>Detalhes:</strong> {launch.details || 'Não existe detalhes!'}</p>
      <Link to="/" className="back-button">Voltar</Link>
    </div>
  );
};

export default LaunchDetail;

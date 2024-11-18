import React, { useEffect, useState } from 'react';  
import { useParams, Link } from 'react-router-dom';  
import '../styles/LaunchDetails.css'; 

// estrutura com os campos que precisamos
interface Launch {
  name: string;          
  date_utc: string;      
  details: string;       
  rocket: string;        
}

const LaunchDetail: React.FC = () => {  
  const { id } = useParams<{ id: string }>();  // Pega o parâmetro 'id' da URL usando o hook useParams
  const [launch, setLaunch] = useState<Launch | null>(null);  // Define que pode ser um objeto Launch ou null e a função 'setLaunch' para atualizar esse estado

  // Função para buscar os detalhes do lançamento
  const fetchBuscarLançamentosDetalhes = async () => {
    try {
      // Faz um GET
      const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
      // Converte em JSON
      const data = await response.json();
      // Passa os dados
      setLaunch(data);
    } catch (error) {
      console.error('Erro ao buscar detalhes do lançamento:', error);
    }
  };

  // é executado quando o componente é montado ou quando o 'id' muda
  useEffect(() => {
    fetchBuscarLançamentosDetalhes();  // Chama a função para pegar os dados assim que o componente for renderizado
  }, [id]);  // O useEffect será executado novamente caso o 'id' mude na URL

  // Se o lançamento não foi carregado (ainda está null), exibe uma mensagem de carregamento
  if (!launch) {
    return <p>Carregando...</p>;
  }

  // Depois que os dados estiverem carregados, renderiza o conteúdo do lançamento
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

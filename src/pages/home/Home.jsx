import React from 'react';
import './Home.css';
import Timer from '../../components/timer/Timer';

const Home = () => {
  return (
    <div className="home">
      <div className="left-section">
        <h1>Conheça a Nova Farmácia da Márcia!</h1>
        <div className="image-section">
          <img src="./images/farmarcia-placa.PNG.png" alt="Farmácia Renovada" className="side-image" />
        </div>
      </div>
      <div className="right-section">
        <div className="text-section">
          <h2>Estamos de portas abertas para receber você com o que há de melhor!</h2>
          <p>Agora, sob nova direção, nossa farmácia passou por uma grande transformação. Com um ambiente renovado e uma equipe qualificada, estamos prontos para oferecer um atendimento ainda mais dedicado e humanizado, sempre focados no cuidado com a sua saúde e bem-estar.</p>
          <p>Não perca essa oportunidade de conhecer o novo espaço e aproveitar ofertas exclusivas!</p>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
  const [tempoRestante, setTempoRestante] = useState('');

  useEffect(() => {
    const dataInauguracao = new Date('2024-11-25T00:00:00').getTime();

    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const distancia = dataInauguracao - agora;

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      if (distancia < 0) {
        clearInterval(intervalo);
        setTempoRestante('A inauguração já aconteceu!');
      } else {
        setTempoRestante(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="timer">
      <h3>Acontecera no dia 25 de Novembro de 2024, Faltam apenas:</h3>
      <p>{tempoRestante}</p>
    </div>
  );
};

export default Timer;

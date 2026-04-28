import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import {
  BookOpen,
  HeartPulse,
  ClipboardList,
  Pill,
  Activity,
  Ambulance,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Consultas Médicas",
      description: "Agende consultas e acompanhe especialistas.",
      icon: <HeartPulse size={34} />,
      rota: "/consultas",
    },
    {
      title: "Exames",
      description: "Resultados, histórico e acompanhamento.",
      icon: <ClipboardList size={34} />,
      rota: "/exames",
    },
    {
      title: "Medicamentos",
      description: "Controle remédios e horários facilmente.",
      icon: <Pill size={34} />,
      rota: "/medicamentos",
    },
    {
      title: "Monitoramento",
      description: "Pressão, glicemia e frequência cardíaca.",
      icon: <Activity size={34} />,
      rota: "/monitoramento",
    },
    {
      title: "Emergência",
      description: "Acesso rápido para suporte urgente.",
      icon: <Ambulance size={34} />,
      rota: "/emergencia",
    },
    {
      title: "Bem-estar",
      description: "Saúde física, mental e qualidade de vida.",
      icon: <BookOpen size={34} />,
      rota: "/bem-estar",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.subtitle}>Portal Saúde+</p>

          <h1>
            Cuidar da sua saúde
            <br />
            ficou mais simples
          </h1>

          <p className={styles.description}>
            Um ambiente moderno para consultas, exames, monitoramento e bem-estar.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.infoBox}>
          <h2>Serviços disponíveis</h2>
          <p>
            Escolha uma área para acessar informações e recursos importantes.
          </p>
        </section>

        <section className={styles.grid}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => navigate(card.rota)}
            >
              <div className={styles.iconBox}>
                {card.icon}
              </div>

              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <button>Acessar</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
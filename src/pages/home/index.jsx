import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

import {
  Syringe,
  Scale,
  Droplets,
  Dumbbell,
  Apple,
  Brain,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Vacinação",
      description:
        "Informações sobre vacinas, prevenção e calendário vacinal.",
      icon: <Syringe size={32} />,
      rota: "/vacinacao",
    },
    {
      title: "IMC",
      description:
        "Calcule seu índice de massa corporal e acompanhe sua saúde.",
      icon: <Scale size={32} />,
      rota: "/imc",
    },
    {
      title: "Beber Água",
      description:
        "Descubra a importância da hidratação para o corpo e mente.",
      icon: <Droplets size={32} />,
      rota: "/beberagua",
    },
    {
      title: "Esporte Físico",
      description:
        "Benefícios das atividades físicas para qualidade de vida.",
      icon: <Dumbbell size={32} />,
      rota: "/esportefisico",
    },
    {
      title: "Alimentação",
      description:
        "Dicas nutricionais para manter uma rotina equilibrada.",
      icon: <Apple size={32} />,
      rota: "/alimentacao",
    },
    {
      title: "Saúde Mental",
      description:
        "Cuidados emocionais, bem-estar psicológico e equilíbrio.",
      icon: <Brain size={32} />,
      rota: "/saudemental",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>Portal Vida+</span>

          <h1>
            Sua saúde
            <br />
            em primeiro lugar
          </h1>

          <p>
            Informações importantes para melhorar sua qualidade de vida,
            prevenir doenças e manter hábitos saudáveis diariamente.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.infoBox}>
          <div>
            <h2>Áreas de cuidado</h2>

            <p>
              Explore conteúdos educativos e recursos voltados ao seu bem-estar.
            </p>
          </div>
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

              <button>Ver conteúdo</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
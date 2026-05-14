import styles from "./index.module.css";

import {
  Dumbbell,
  HeartPulse,
  TimerReset,
  Brain,
} from "lucide-react";

export default function Esporte() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Movimento e qualidade de vida
          </span>

          <h1>Esporte Físico</h1>

          <p>
            A prática de atividades físicas contribui para a saúde do corpo,
            melhora o condicionamento e promove mais bem-estar diariamente.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoCard}>
          <div className={styles.iconBox}>
            <Dumbbell size={34} />
          </div>

          <div>
            <h2>Por que praticar exercícios?</h2>

            <p>
              Exercícios físicos ajudam no fortalecimento muscular,
              aumentam a disposição e auxiliam na prevenção de doenças.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <HeartPulse size={28} />
            </div>

            <h3>Saúde do coração</h3>

            <p>
              Atividades físicas melhoram a circulação sanguínea e ajudam
              no controle da pressão arterial.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <TimerReset size={28} />
            </div>

            <h3>Mais disposição</h3>

            <p>
              A prática regular de exercícios aumenta a energia,
              resistência física e qualidade do sono.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Brain size={28} />
            </div>

            <h3>Saúde mental</h3>

            <p>
              Exercícios ajudam na redução do estresse,
              ansiedade e melhoram o bem-estar emocional.
            </p>
          </div>
        </section>

        <section className={styles.highlight}>
          <div className={styles.highlightContent}>
            <h2>Benefícios do esporte físico</h2>

            <ul>
              <li>Fortalecimento muscular e ósseo</li>
              <li>Melhora da saúde cardiovascular</li>
              <li>Mais energia e disposição</li>
              <li>Redução do estresse e ansiedade</li>
            </ul>
          </div>

          <div className={styles.imageArea}>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              alt="Esporte físico"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
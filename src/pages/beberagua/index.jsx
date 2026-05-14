import styles from "./index.module.css";

import {
  Droplets,
  GlassWater,
  HeartPulse,
  Brain,
} from "lucide-react";

export default function Agua() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Hidratação e saúde
          </span>

          <h1>Importância de Beber Água</h1>

          <p>
            A água é essencial para o funcionamento do organismo,
            ajudando na circulação, temperatura corporal e equilíbrio do corpo.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoCard}>
          <div className={styles.iconBox}>
            <Droplets size={34} />
          </div>

          <div>
            <h2>Por que beber água?</h2>

            <p>
              A hidratação adequada melhora o funcionamento do corpo,
              auxilia os órgãos e contribui para mais disposição no dia a dia.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <GlassWater size={28} />
            </div>

            <h3>Hidratação corporal</h3>

            <p>
              Beber água ajuda no transporte de nutrientes e no equilíbrio
              das funções do organismo.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <HeartPulse size={28} />
            </div>

            <h3>Saúde física</h3>

            <p>
              A água auxilia na circulação sanguínea, digestão e controle
              da temperatura corporal.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Brain size={28} />
            </div>

            <h3>Bem-estar mental</h3>

            <p>
              A hidratação também influencia na concentração,
              memória e redução do cansaço.
            </p>
          </div>
        </section>

        <section className={styles.highlight}>
          <div className={styles.highlightContent}>
            <h2>Benefícios da hidratação</h2>

            <ul>
              <li>Melhora do funcionamento do organismo</li>
              <li>Mais disposição e energia</li>
              <li>Auxílio na concentração</li>
              <li>Regulação da temperatura corporal</li>
            </ul>
          </div>

          <div className={styles.imageArea}>
            <img
              src="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop"
              alt="Beber água"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
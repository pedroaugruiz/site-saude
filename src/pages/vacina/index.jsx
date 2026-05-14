import styles from "./index.module.css";

import {
  ShieldCheck,
  Syringe,
  CalendarCheck,
  HeartPulse,
} from "lucide-react";

export default function Vacinacao() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Proteção e prevenção
          </span>

          <h1>Vacinação</h1>

          <p>
            A vacinação é uma das formas mais eficazes de prevenir doenças,
            proteger a população e fortalecer o sistema imunológico.
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoCard}>
          <div className={styles.iconBox}>
            <ShieldCheck size={34} />
          </div>

          <div>
            <h2>Por que vacinar?</h2>

            <p>
              As vacinas ajudam o organismo a reconhecer vírus e bactérias,
              reduzindo riscos de doenças graves, internações e transmissão.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Syringe size={28} />
            </div>

            <h3>Proteção individual</h3>

            <p>
              A imunização reduz complicações e fortalece a defesa do corpo
              contra diversas doenças infecciosas.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <HeartPulse size={28} />
            </div>

            <h3>Saúde coletiva</h3>

            <p>
              Quando grande parte da população se vacina, a circulação de
              doenças diminui significativamente.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <CalendarCheck size={28} />
            </div>

            <h3>Calendário vacinal</h3>

            <p>
              Manter as vacinas em dia é essencial durante a infância,
              adolescência, vida adulta e terceira idade.
            </p>
          </div>
        </section>

        <section className={styles.highlight}>
          <div className={styles.highlightContent}>
            <h2>Importância da vacinação</h2>
            
            <ul>
              <li>Prevenção de doenças graves</li>
              <li>Redução da transmissão</li>
              <li>Fortalecimento da imunidade</li>
              <li>Mais segurança para toda a sociedade</li>
            </ul>
          </div>

          <div className={styles.imageArea}>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
              alt="Vacinação"
            />
          </div>
        </section>
      </main>
    </div>
  );
}